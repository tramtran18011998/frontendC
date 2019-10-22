import React, { Component } from 'react';
import Editor from 'for-editor'
import Button from '@material-ui/core/Button';
import Router from 'next/router'
import { Icon } from 'react-icons-kit'
import TextField from '@material-ui/core/TextField';
import { ic_question_answer } from 'react-icons-kit/md/ic_question_answer'
import { ic_send } from 'react-icons-kit/md/ic_send'
import { ic_reply } from 'react-icons-kit/md/ic_reply'
import {ic_check} from 'react-icons-kit/md/ic_check'
import { refresh } from 'react-icons-kit/fa/refresh'
import { times } from 'react-icons-kit/fa/times'
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

const getContactUrl = api.callAPI() + `documents/`
const updateDocsStatusUrl = api.callAPI() + `documents/updateStatus`

class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                createdDate: "",
                content: ""
            },
            logo1 : "",
            logo2:"",
            image:"",
            auth: {},
            value: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            data:{
                ...this.state.data,
                [e.target.name] : e.target.value
            }
        })
        console.log(e)
    }
    handleChangeMD = (val)=>{
        console.log(val)
        this.setState({
            data:{
                ...this.state.data,
                content : val
            }
        })
    }

    handleChangeImg = (e)=>{
        const data = e.target.files[0]
        this.setState({
            data : {
                ...this.state.data,
                [e.target.name] : data
            },
            [e.target.name] : URL.createObjectURL(data)
        })
        console.log(e.target.name)
        console.log(e.target.files[0])
    }

    statusDocs = (status) => {
        const id = this.props.location.pathname.substring(12, this.props.location.pathname.length)
        var formData = new FormData()
        formData.append("status", status)
        fetch(updateDocsStatusUrl, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": "Bearer " + cookies.get("token")
            },
            body: JSON.stringify({
                id: id,
                status: status
            }),

        }).then(res => {
            console.log(res)
            Router.push("/admin/docs")
        })

    }

    componentDidMount() {
        console.log(Router.router.asPath.substring(9))
        const id = Router.router.asPath.substring(9)
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
            if(data.result)
            {  
                const result = data.result
                result.tags = data.result.tags[0].name
                console.log(result)
                this.setState({
                    data : result,
                    logo1 : "http://localhost:8080/"+"upload/"+ result.logo1,
                    image : "http://localhost:8080/"+"upload/"+ result.image,
                    logo2 : "http://localhost:8080/"+"upload/"+ result.logo2
                })
                console.log(this.state)
            }
        })
    }

    render() {
        console.log(api.callAPI())
        const { value } = this.state
        const{image, logo1, logo2} = this.state
        const { status, title, instructions, content, id, tags} = this.state.data ? this.state.data : {}
        const { email, phone, name } = this.state.auth
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
                <div style={{ position: "fixed", background: "#f5f6fa", width: "200%", height: "100%", left: "0px", top: "0px", zIndex: "-10" }}>

                </div>
                <div className="container">
                    <div className="col-12 row pl-5" style={{ width: "100%", marginBottom: "100px" }}>
                        <div className="mt-3 col-11 pl-0" style={{ color: "#0000006e", marginBottom: "20px", position: "relative" }}>
                            <Element name="form" className="mt-3 col-12 pl-0 mb-3" style={{ color: "#0000006e", fontSize: "25px", fontWeight: "bold" }}>Documents</Element>
                        </div>
                        <div className="col-11 row" style={{ position: "relative", background: "white", border: "1px solid #00000030", marginBottom: "50px" }}>
                            <div className="col-12 mt-4">
                                {status === "CHECKED" ?
                                    <h2 style={{ fontSize: "20px", marginLeft: "10px", color: "#1e00ff8c" }}>
                                        <Icon size={20} onClick={() => Router.push("/writers")} style={{ marginRight: "20px", cursor: "pointer", color: "black" }} icon={ic_arrow_back} />Checked Documents <Icon size={25} icon={ic_check} /></h2> :
                                    <h2 style={{ fontSize: "20px", marginLeft: "10px", color: "red" }}>
                                        <Icon size={20} onClick={() => Router.push("/writers")} style={{ marginRight: "20px", cursor: "pointer", color: "black" }} icon={ic_arrow_back} />Pending Documents <Icon size={25} icon={refresh} /></h2>
                                }
                            </div>
                            <div className="form-group col-12 row">
                                <div className="col"></div>
                                <div className="col-12 mt-4 row container">
                                    <TextField
                                        id="standard-name"
                                        label="title"
                                        name="title"
                                        value={title}
                                        margin="normal"
                                        defaultValue="foo"
                                        className="col-12 col-lg-5"
                                        onChange={e=>this.handleChange(e)}
                                    />
                                    <div className="col"></div>
                                    <TextField
                                        id="standard-name"
                                        label="tag"
                                        name="tag"
                                        value={tags}
                                        margin="normal"
                                        className="col-12 col-lg-6"
                                        defaultValue="foo"
                                        onChange={e=>this.handleChange(e)}
                                    />
                                    <TextField
                                        id="standard-name"
                                        label="instructions"
                                        name="instructions"
                                        value={instructions}
                                        defaultValue="foo"
                                        margin="normal"
                                        className="col-12"
                                        onChange={e=>this.handleChange(e)}
                                    />
                                    <div className="col-12 col-lg-6 mt-5">
                                        {image === ""  ?  
                                        <div style={{width:"50%", border:"1px solid black", height:"150px", textAlign:"center", marginBottom:"20px"}}>Image</div>:
                                        <img style={{width:"50%"}} src={image} />  
                                        }
                                        <input name="image" className="col-6" type="file"/>
                                    </div>
                                    <div className="col-12 col-lg-6 mt-5">
                                        {logo1 === ""  ?  
                                        <div style={{width:"50%", border:"1px solid black", height:"150px", textAlign:"center", marginBottom:"20px"}}>logo1</div>:
                                        <img style={{width:"50%"}} src={logo1} />  
                                        }
                                        <input name="logo1" onChange={e=>this.handleChangeImg(e)} className="col-6" type="file"/>
                                    </div>
                                    <div className="col-12 col-lg-6 mt-5">
                                        {logo2 === "" ?  
                                        <div style={{width:"50%", border:"1px solid black", height:"150px", textAlign:"center", marginBottom:"20px"}}>logo2</div>:
                                        <img style={{width:"50%"}} src={logo2} />  
                                        }
                                        <input name="logo2" className="col-6" type="file"/>
                                    </div>
                                </div>
                                <div className="col-12 mt-5">
                                    <Editor language="en" lineNum={true} placeholder="Detail" style={{ height: "400px" }} value={content} onChange={(e) => this.handleChangeMD(e)} />
                                </div>
                                <div className="col-12 mt-3" style={{ marginBottom: "30px" }}>
                                        <div>
                                            <Button onClick={e => this.statusDocs("CHECKED", id)} variant="contained" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px", background:"#48ad48", color:"white" }}>
                                                Save <Icon style={{ marginLeft: "10px", marginTop:"-5px" }} size={20} icon={ic_check} />
                                            </Button>
                                            {status === "CHECKED" || status === "PENDING" ?
                                            "":
                                            <Button onClick={e => this.statusDocs("CHECKED", id)} variant="contained" color="primary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px", marginLeft: "10px" }}>
                                                Submit <Icon style={{ marginLeft: "10px" }} size={20} icon={ic_send} />
                                            </Button>}
                                            {status === "CHECKED"?
                                            "":
                                            <Button onClick={e => this.statusDocs("OLD", id)} variant="contained" color="secondary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px", marginLeft: "10px" }}>
                                                Remove <Icon style={{ marginLeft: "5px", marginTop: "-2px" }} size={20} icon={times} />
                                            </Button>
                                            }
                                        </div> 
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default DashboardPage;