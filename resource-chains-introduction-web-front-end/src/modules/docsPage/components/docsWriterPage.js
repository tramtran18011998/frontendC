import React, { Component } from 'react';
import Editor from 'for-editor'
import Button from '@material-ui/core/Button';
import TableDocs from "./Table"
import TableSaveDocs from "./Table_save_doc"
import TableReturnDocs from "./Table_Return"
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

const getDocsUrl = api.callAPI() + "documents/"

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
            rows: [],
            rowsSaved : [],
            rowsReturned : []
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

    componentDidMount(){
        
        const id = cookies.get("id")
        console.log(id)
        fetch(getDocsUrl + id+"/document", {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            const rows = data.result.filter(e=> {
                if(e.status === "PENDING" || e.status === "CHECKED")
                    return e
            })
            const rowsSaved = data.result.filter(e=>{
                if(e.status === "UNFINISHED")
                    return e
            })
            const rowsReturned = data.result.filter(e=>{
                if(e.status === "OLD" || e.status === "DENY")
                    return e
            })
            this.setState({
                rows : rows,
                rowsSaved : rowsSaved,
                rowsReturned : rowsReturned
            })
        })
    }
    render() {
        const { value } = this.state
        return (
            <React.Fragment>
                <div className="container">
                <div style={{ position: "fixed", background: "#f5f6fa", width: "200%", height: "100%", left: "0px", top: "0px", zIndex: "-10" }}>
                </div>
                <div>
                <div className="row " style={{ width: "100%",margin:"0px",padding:"0px", marginBottom: "100px" }}>
                    <div className="mt-3 col-11 pl-0" style={{ color: "#0000006e", marginBottom: "20px", position: "relative" }}>
                        <Element name="form" className=" col-12 pl-0 " style={{ color: "#0000006e", fontSize: "25px", fontWeight: "bold" }}>Your Document</Element>
                    </div>
                    <div className="col-12 col-lg-5 row">
                        <TableSaveDocs  {...this.state} {...this.props} />
                    </div>
                    <div className="col-0 col-lg">

                    </div>
                    <div className="col-12 col-lg-7 row">
                        <TableDocs  {...this.state} {...this.props} />
                    </div>
                    <div className="col-12 row">
                        <TableReturnDocs  {...this.state} {...this.props} />
                    </div>

                </div>

                </div>

                </div>
            </React.Fragment>
        );
    }
}

export default DashboardPage;