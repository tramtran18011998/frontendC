import React, { Component,useState } from 'react';
import TableCustomer from "./Table"
import ModalCustomer from "./modal"
import Button from '@material-ui/core/Button';
import { Icon } from 'react-icons-kit'
import {ic_person_add} from 'react-icons-kit/md/ic_person_add'
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
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import * as api from "../../../api"
const getContactUrl = api.callAPI()+`contact`

class customersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false,
            openModal: false,
            data:{
                companyAddress:"", 
                companyName:"",
                companyPhoneNumber:"10/21/2019", 
                createdDate:"10/21/2019" , 
                email:"",
                fullName:"",
                message:"",
                personalPhoneNumber:"",
                type:""
            },
            index : "",
            isUpdate : false,
            rows : [
              ],
            loading:false
        }
    }

    componentDidMount(){
        fetch(getContactUrl, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer " + cookies.get("token")
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data.result)
            this.setState({
                rows : data.result
            })
        })
    }

    handleModal(){
        if(this.state.openModal)
            this.setState({
                data : {
                    companyAddress:"", 
                    companyName:"",
                    companyPhoneNumber:"10/21/2019", 
                    createdDate:"10/21/2019" , 
                    email:"",
                    fullName:"",
                    message:"",
                    personalPhoneNumber:"",
                    type:""
                },
                index:"",
                isUpdate:false
            })
        this.setState({
            openModal:!this.state.openModal
        })
    }

    render() {
    const uploadData=(data)=>
    {
        console.log(data)
        this.setState({
            data:data,
            isUpdate:true
        })
        this.handleModal()
        console.log(this.state)
    }

    const handleSubmit=(id)=>{
        let newRows = [...this.state.rows]
        newRows.map(e=>{
            if(e.id === id)
                e.status = true
            return e
        })
        console.log(newRows)
        this.setState({
            rows : newRows
        })
        this.handleModal()
    }
    const handleOnchange=(info,value)=>{
        this.setState({
            data:{
                ...this.state.data,
                [info] : value
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
                <div style={{position:"fixed", background:"#f5f6fa",width: "200%", height:"100%",left:"0px",top:"0px",zIndex:"-10"}}>

                </div>
                <div className="col-12 row pl-5" style={{ width: "100%", marginBottom: "100px" }}>
                    <div className="mt-3 col-11 pl-0" style={{ color: "#0000006e", marginBottom:"20px",position:"relative" }}>
                        <Element name="form" className=" col-12 pl-0" style={{ color: "#0000006e",fontSize:"25px",fontWeight:"bold" }}>Contact</Element>
                    </div>

                    <div className=" col-11 row">
                        <TableCustomer uploadData={uploadData} {...this.state}></TableCustomer>     
                    </div>
                    <ModalCustomer handleSubmit={handleSubmit} handleModal={e=>this.handleModal()} handleOnchange={handleOnchange} {...this.state}/>
                </div>
            </React.Fragment>
        );
    }
}

export default customersPage;