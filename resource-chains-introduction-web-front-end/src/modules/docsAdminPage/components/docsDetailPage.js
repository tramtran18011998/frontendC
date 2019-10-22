import React, { Component } from 'react';
import Editor from 'for-editor'
import Button from '@material-ui/core/Button';
import Router from 'next/router'
import { Icon } from 'react-icons-kit'
import TextField from '@material-ui/core/TextField';
import { ic_question_answer } from 'react-icons-kit/md/ic_question_answer'
import { ic_send } from 'react-icons-kit/md/ic_send'
import { ic_reply } from 'react-icons-kit/md/ic_reply'
import { ic_check } from 'react-icons-kit/md/ic_check'
import { ellipsisV } from 'react-icons-kit/fa/ellipsisV'
import { ic_inbox } from 'react-icons-kit/md/ic_inbox'
import { ic_clear } from 'react-icons-kit/md/ic_clear'
import { trashO } from 'react-icons-kit/fa/trashO'
import {ic_person_add} from 'react-icons-kit/md/ic_person_add'
import {refresh} from 'react-icons-kit/fa/refresh'
import {times} from 'react-icons-kit/fa/times'
import { ic_arrow_back } from 'react-icons-kit/md/ic_arrow_back'
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";
import cookies from 'js-cookie';
import * as axios from "axios"
import fetch from 'unfetch';
import * as api from "../../../api"

const getContactUrl = api.callAPI()+ `documents/`
const updateDocsStatusUrl = api.callAPI()+`documents/updateStatus`

class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:{
                createdDate : "",
                content : ""
            },
            auth : {},
            value : ""
        }
    }

    handleChange=(e)=>{
        this.setState({
            value:e
        })
        console.log(e)
    }

    statusDocs=(status)=>{
        const id = this.props.location.pathname.substring(12,this.props.location.pathname.length)
        var formData = new FormData()
        formData.append("status",status)
        fetch(updateDocsStatusUrl, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": "Bearer " + cookies.get("token")
            },
            body:  JSON.stringify({
                id: id,
                status: status
              }),
            
        }).then(res => {
            console.log(res)
            Router.push("/admin/docs")
        })

    }

    componentDidMount() {
        const id = this.props.location.pathname.substring(12,this.props.location.pathname.length)
        fetch(getContactUrl + id, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data.result)
            this.setState({
                data : data.result
            })
        })
    }

    render() {
        console.log(api.callAPI())
        const { value } = this.state
        const {status, title, createdDate, content,id } = this.state.data? this.state.data:{}
        const {email, phone, name} = this.state.auth
        return (
            <React.Fragment>
            <style jsx>
                {`
                .contacts-type{
                    background: white;
                    border-radius: 10px;
                    border:1px solid #00000030
                }
            `}
            </style>
                <div style={{position:"fixed", background:"#f5f6fa",width: "200%", height:"100%",left:"0px",top:"0px",zIndex:"-10"}}>

                </div>
            <div className="col-12 row pl-5" style={{ width: "100%", marginBottom: "100px" }}>
                <div className="mt-3 col-11 pl-0" style={{ color: "#0000006e", marginBottom:"20px",position:"relative" }}>
                    <Element name="form" className="mt-3 col-12 pl-0 mb-3" style={{ color: "#0000006e",fontSize:"25px",fontWeight:"bold" }}>Documents</Element>
                </div>
                        <div className="col-11 row" style={{ position: "relative", background: "white", border: "1px solid #00000030", marginBottom: "50px" }}>
                            <div className="col-12 mt-4">
                                {status === "CHECKED"?
                            <h2 style={{ fontSize: "20px", marginLeft: "10px", color: "#1e00ff8c" }}>
                            <Icon size={20} onClick={()=> Router.push("/admin/docs")} style={{ marginRight: "20px", cursor:"pointer",color:"black" }} icon={ic_arrow_back} />Checked Documents <Icon size={25} icon={ic_check} /></h2>:
                            <h2 style={{ fontSize: "20px", marginLeft: "10px", color: "red" }}>
                            <Icon size={20} onClick={()=> Router.push("/admin/docs")} style={{ marginRight: "20px", cursor:"pointer",color:"black" }} icon={ic_arrow_back} />Pending Documents <Icon size={25} icon={refresh} /></h2>
                            }
                            </div>
                            <div className="form-group col-12 row">
                                <div className="col-12 mt-4">
                                    <h2 style={{ color: "#202124", fontWeight: "bold" }}>{title}</h2>
                                    <p><b style={{color:"#721818"}}> {name} </b><span style={{ fontSize: "12px", color: "#555", fontWeight: "400" }}>{email}</span> </p>
                                    <p>{phone}</p>
                                    <p style={{fontSize:"15px"}}>{createdDate?createdDate.substring(0,10).split("-").reverse().join("-"):""}</p>
                                </div>
                                <div className="col-12">
                                    <Editor language="en" lineNum={true} placeholder="Detail" style={{height:"400px"}} value={content} preview={true} onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="col-12 mt-3" style={{ marginBottom: "30px" }}>
                                {status === "PENDING"?
                                <div>   
                                    <Button onClick={e => this.statusDocs("CHECKED",id)} variant="contained" color="primary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px" }}>
                                        Accept <Icon style={{ marginLeft: "10px" }} size={20} icon={ic_send} />
                                    </Button>
                                    <Button onClick={e => this.statusDocs("DENY",id)} variant="contained" color="secondary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px", marginLeft:"10px" }}>
                                        Deny <Icon style={{ marginLeft: "5px",marginTop:"-2px" }} size={20} icon={times} />
                                    </Button>
                                    </div> : 
                                    <Button onClick={e => this.statusDocs("OLD",id)} variant="contained" color="secondary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px", marginLeft:"10px" }}>
                                        Remove <Icon style={{ marginLeft: "5px",marginTop:"-2px" }} size={20} icon={times} />
                                    </Button>}
                                </div>
                            </div>
                        </div>
                <div className="col-11 row">

                </div>

            </div>
            </React.Fragment>
        );
    }
}

export default DashboardPage;