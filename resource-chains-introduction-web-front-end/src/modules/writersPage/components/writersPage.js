import React, { Component } from 'react';
import TableDocs from "./Table"
import ModalWriter from "./modal"
import Button from '@material-ui/core/Button';
import { Icon } from 'react-icons-kit'
import { ic_check } from 'react-icons-kit/md/ic_check'
import { ic_block } from 'react-icons-kit/md/ic_block'
import { ic_person_add } from 'react-icons-kit/md/ic_person_add'
import { user } from 'react-icons-kit/fa/user'
import cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import * as api from "../../../api"
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const addWriterUrl = api.callAPI()+ `auth/addWriter`
const statusWriterURL = api.callAPI()+ "auth/update/status"
const documentWriter = api.callAPI()+"documents/"

class writersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false,
            img: "",
            data: {
                img: "",
                name: "",
                username: "",
                phoneNumber: "",
                email: "",
                password: ""
            },
            isUsedEmail : false,
            isUsedUsername:false,
            index: "",
            showForm: false,
            isAddWriter: false,
            banWriter:this.props.banWriter,
            availableWriter:this.props.availableWriter,
            arrDocs:[]
        }
    }
    handleModal() {
        if (this.state.openModal)
            this.setState({
                data: {
                    name: "",
                    username: "",
                    phoneNumber: "",
                    email: "",
                    password: ""
                },
                index: "",
                isUpdate: false
            })
        console.log(this.state)
        this.setState({
            openModal: !this.state.openModal,
            isUsedEmail:false,
            isUsedUsername:false,
            isUsedPhone : false,
            isUsedPhone: false
        })
    }
    handleStatusWriter = (status,id) => {
        var formData = new FormData()
        var data = {
            status:status
        }
        for(let i in data)
            formData.append(i,formData[i])
        fetch(statusWriterURL, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": "Bearer " + cookies.get("token")
            },
            body: JSON.stringify({
                id: id,
                status: status
              }),
        }).then(res => {
            console.log(res)
            return res.text()
        }).then(data => {
            console.log(data)
            this.props.updateCount(status)
        })
        let newRow = [...this.props.rows]
        newRow.filter(e => {
            if(e.id === this.state.index)
            {
                e.status = status
            }
            return e
        })
        this.setState({
            rows: newRow,
        })
        this.handleModal()

    }
    handleAddWriter() {
        console.log(this.state)
        this.setState({
            isAddWriter: !this.state.isAddWriter
        })
    }
    addWriter = () => {
        if (!this.state.isAddWriter)
            this.handleAddWriter()
        this.handleModal()
    }
    render() {
        // console.log(this.props)
        const uploadData = (data, index) => {
            console.log(data)
            fetch(documentWriter + data.id+`/document`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "Authorization": "Bearer " + cookies.get("token")
                },
            }).then(res => {
                return res.json()
            }).then(data => {
                this.setState({
                    arrDocs:data.result
                })
            })
            this.setState({
                data: { ...data },
                index: index,
                isUpdate: true,
                isAddWriter: false
            })
            console.log(this.state)
            this.handleModal()
        }
        const initData = () => {
            this.setState({
                data: {
                    name: "",
                    username: "",
                    phoneNumber: "",
                    email: "",
                    password: ""
                },
            })
        }
        const handleSubmit = () => {
            fetch(addWriterUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + cookies.get("token")
                },
                body: JSON.stringify({
                    email: this.state.data.email,
                    password: this.state.data.password,
                    username: this.state.data.username,
                    name: this.state.data.name,
                    phoneNumber: this.state.data.phoneNumber
                })
            }).then(res => {
                console.log(res)
                return res.json()
            }).then(data => {
                console.log(data)
                if(data.message === "Email already in use")
                {
                    this.setState({isUsedEmail:true})
                    this.setState({isUsedUsername:false})
                    this.setState({isUsedPhone:false})
                    return
                }
                if(data.message === "Username already in use")
                {
                    this.setState({isUsedUsername:true})
                    this.setState({isUsedEmail:false})
                    this.setState({isUsedPhone:false})
                    return
                }
                if(data.status === 500)
                {
                    this.setState({isUsedPhone:true})
                    this.setState({isUsedEmail:false})
                    this.setState({isUsedUsername:false})
                    return
                }
                this.setState({isUsedEmail:false})
                let newRow = this.props.rows
                data = { ...this.state.data, status: "available" }
                newRow.push(data)
                this.setState({
                    data: {
                        name: "",
                        username: "",
                        phoneNumber: "",
                        email: "",
                        password: ""
                    },
                    rows: newRow,
                })
                this.handleModal()
            })
        }
        const handleOnchange = (info, value) => {
            this.setState({
                data: {
                    ...this.state.data,
                    [info]: value
                }
            })
        }
        return (
            <React.Fragment>
                <style jsx>
                    {`
                    .contacts-type{
                        background: white;
                        border-radius: 10px;
                        border:1px solid #00000030
                    }
                    .item{
                        transition:all 0.2s;
                        cursor:pointer
                    }
                    .item:hover{
                        transition:all 0.2s;
                        border:1px solid #00000030;
                        transform : scale(1.02,1.02); 
                        box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
                    }
                `}
                </style>
                <div style={{position:"fixed", background:"#f5f6fa",width: "200%", height:"100%",left:"0px",top:"0px",zIndex:"-10"}}>

                </div>
                <div className="col-12 row pl-5" style={{ width: "100%" }}>
                    <div className="mt-3 col-11 pl-0" style={{ color: "#0000006e", marginBottom: "20px", position: "relative" }}>
                        <h3>Writers</h3>
                        <Button onClick={this.addWriter} style={{ float: "right", position: "absolute", right: "15px", top: "0px", borderRadius: "20px" }} variant="contained" color="secondary">
                            <Icon size={20} style={{ marginRight: "10px" }} icon={ic_person_add} /> Add Writer
                        </Button>
                    </div>
                    <div className="contacts-type col-11 row">
                        <div className="col-4 row" style={{ marginLeft: "45px", marginBottom: "15px" }}>
                            <div className="col-3">
                                <div style={{ background: "#f2f9ff", width: "60px", height: "60px", borderRadius: "50%", border: "1px solid #00000030", marginTop: "20px" }}>
                                    <Icon style={{ marginBottom: "5px", marginLeft: "18px", color: "#505ace", marginTop: "15px" }} size={25} icon={user} />
                                </div>

                            </div>
                            <div className="col-8" style={{ marginTop: "15px", borderRight: "1px solid #00000030", height: "60px", paddingRight: "20px" }}>
                                <h4 style={{ fontSize: "18px", color: "#8200009e    " }}>All writers</h4>
                                <h3>{this.props.rows.length-1} <span style={{ fontSize: "15px", color: "#00000069" }}>Writers</span></h3>
                            </div>
                        </div>
                        <div className="col-4 row" style={{ marginLeft: "0px", marginBottom: "15px" }}>
                            <div className="col-3">
                                <div style={{ background: "#f2f9ff", width: "60px", height: "60px", borderRadius: "50%", border: "1px solid #00000030", marginTop: "20px" }}>
                                    <Icon style={{ marginBottom: "5px", marginLeft: "18px", color: "#505ace", marginTop: "15px" }} size={25} icon={ic_check} />
                                </div>

                            </div>
                            <div className="col-8" style={{ marginTop: "15px", borderRight: "1px solid #00000030", height: "60px" }}>
                                <h4 style={{ fontSize: "18px", color: "#8200009e    " }}>Available writers</h4>
                                <h3>{this.props.availableWriter-1} <span style={{ fontSize: "15px", color: "#00000069" }}>Writers</span></h3>
                            </div>
                        </div>
                        <div className="col-4 row" style={{ marginLeft: "0", marginBottom: "15px" }}>
                            <div className="col-3">
                                <div style={{ background: "#f2f9ff", width: "60px", height: "60px", borderRadius: "50%", border: "1px solid #00000030", marginTop: "20px" }}>
                                    <Icon style={{ marginBottom: "5px", marginLeft: "18px", color: "#505ace", marginTop: "15px" }} size={25} icon={ic_block} />
                                </div>

                            </div>
                            <div className="col-8" style={{ marginTop: "15px" }}>
                                <h4 style={{ fontSize: "18px", color: "#8200009e    " }}>Ban writers</h4>
                                <h3>{this.props.banWriter} <span style={{ fontSize: "15px", color: "#00000069" }}>Writers</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 row">
                        <TableDocs  {...this.state} {...this.props} uploadData={uploadData} />

                    </div>
                    <ModalWriter handleAddWriter={e => this.handleAddWriter()} initData={initData} handleSubmit={handleSubmit} handleModal={e => this.handleModal()} handleStatusWriter={this.handleStatusWriter} handleOnchange={handleOnchange} {...this.state} />
                </div>
            </React.Fragment>
        );
    }
}

export default writersPage;