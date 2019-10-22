import React, { Component } from 'react';
import Editor from 'for-editor'
import Button from '@material-ui/core/Button';
import TableDocs from "./Table"
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
import { ic_person_add } from 'react-icons-kit/md/ic_person_add'
import { refresh } from 'react-icons-kit/fa/refresh'
import { times } from 'react-icons-kit/fa/times'
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";
import fetch from 'unfetch';
import cookies from 'js-cookie';
import * as api from "../../../api"

const getDocsUrl = api.callAPI() + "documents/admin"

class DashboardPage extends Component {
    constructor(props) {
        super(props)

        function createData(status, title, name, phone, email, content) {
            return { status, title, name, phone, email };
        }
        this.state = {
            showForm: false,
            showContacts: false,
            startDate: new Date(),
            value: '',
            isChecked: true,
            rows: []
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }
    handleIsCheked = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    handleContacts = () => {
        this.setState({
            showContacts: !this.state.showContacts
        })
    }
    showPendings = () => {
        if (this.state.isChecked)
            this.handleIsCheked()
        this.uploadDataContacts()
    }
    showChecked = () => {
        if (!this.state.isChecked)
            this.handleIsCheked()
        this.uploadDataContacts()
    }
    uploadDataContacts = () => {
        if (!this.state.showContacts) {
            this.handleContacts()
            scroller.scrollTo("form", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -200
            })
        }
    }
    closeContacts = () => {
        if (this.state.showContacts)
            this.handleContacts()
        if (this.state.showForm)
            this.handleShowForm()
    }
    closeFormContacts = () => {
        if (this.state.showForm)
            this.handleShowForm()
    }

    handleChange = (value) => {
        this.setState({
            value
        });
    }

    render() {
        console.log(api.callAPI())
        const { value } = this.state
        console.log(this.props)
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
                    transition:all 0.1s;
                    cursor:pointer;
                    border:1px solid white;
                }
                .item:hover{
                    transition:all 0.1s;
                    box-sizing:border-box;
                    border:1px solid #00000030;
                    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
                    z-index:10;
                }
                .scrollbar {
                    background-color: #F5F5F5;
                    float: left;
                    height: 300px;
                    margin-bottom: 25px;
                    margin-left: 22px;
                    margin-top: 40px;
                    width: 65px;
                    overflow-y: scroll;
                }

                .force-overflow {
                    min-height: 450px;
                }
                
                .listItem::-webkit-scrollbar-track
                {
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    border-radius: 10px;
                    background-color: ##E8ECEF;
                }

                .listItem::-webkit-scrollbar
                {
                    width: 5px;
                    background-color: ##E8ECEF;
                }

                .listItem::-webkit-scrollbar-thumb
                {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                    background-color: #c9d1d6;
                }
            `}
                </style>
                <div style={{ position: "fixed", background: "#f5f6fa", width: "200%", height: "100%", left: "0px", top: "0px", zIndex: "-10" }}>
                </div>
                <div className="col-12 row pl-5" style={{ width: "100%", marginBottom: "100px" }}>
                    <div className="mt-3 col-11 pl-0" style={{ color: "#0000006e", marginBottom: "20px", position: "relative" }}>
                        <Element name="form" className=" col-12 pl-0 " style={{ color: "#0000006e", fontSize: "25px", fontWeight: "bold" }}>Documents</Element>
                    </div>
                    {
                        this.state.showContacts ?
                            <div className="col-11 row" style={{ position: "relative", background: "white", border: "1px solid #00000030", marginBottom: "50px" }}>
                                <Icon onClick={e => this.closeContacts()} style={{ position: "absolute", right: "10px", top: "10px", cursor: "pointer", zIndex: "10" }} size={25} icon={ic_clear} />
                                <div className="col-12 mt-4">
                                    {this.state.isChecked ?
                                        <h2 style={{ fontSize: "20px", marginLeft: "10px", color: "#1e00ff8c" }}>Checked Documents <Icon size={25} icon={ic_check} /></h2> :
                                        <h2 style={{ fontSize: "20px", marginLeft: "10px", color: "red" }}>Pending Documents <Icon size={25} icon={refresh} /></h2>
                                    }
                                </div>
                                <div className="form-group col-12 row">
                                    <div className="col-12 mt-4">
                                        <h5 style={{ color: "#202124", fontWeight: "bold" }}>Time checker  </h5>
                                        <p><b> Nguyễn Ngọc Thanh Long </b><span style={{ fontSize: "12px", color: "#555", fontWeight: "400" }}>dauan6969@gmail.com</span> </p>
                                        <p style={{ fontSize: "15px" }}>10/2/2019</p>
                                    </div>
                                    <div className="col-12">
                                        <Editor language="en" lineNum={true} placeholder="Detail" style={{ height: "400px" }} value={value} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <div className="col-12 mt-3" style={{ marginBottom: "30px" }}>
                                        {!this.state.isChecked ?
                                            <div>
                                                <Button onClick={e => this.closeContacts()} variant="contained" color="primary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px" }}>
                                                    Accept <Icon style={{ marginLeft: "10px" }} size={20} icon={ic_send} />
                                                </Button>
                                                <Button onClick={e => this.closeContacts()} variant="contained" color="secondary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px", marginLeft: "10px" }}>
                                                    Deny <Icon style={{ marginLeft: "5px", marginTop: "-2px" }} size={20} icon={times} />
                                                </Button>
                                            </div> :
                                            <Button onClick={e => this.closeContacts()} variant="contained" color="secondary" style={{ border: "1px solid #ffa9a9", width: "120px", marginTop: "20px", marginLeft: "10px" }}>
                                                Remove <Icon style={{ marginLeft: "5px", marginTop: "-2px" }} size={20} icon={times} />
                                            </Button>}
                                    </div>
                                </div>
                            </div>
                            : ""
                    }
                    <div className="col-11 row">
                        <TableDocs  {...this.state} {...this.props} />
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default DashboardPage;