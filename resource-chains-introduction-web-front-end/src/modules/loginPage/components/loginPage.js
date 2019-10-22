import React, { Component } from 'react';
import Link from "next/link"
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Router from 'next/router';
import FormControl from '@material-ui/core/FormControl';
import fetch from 'unfetch';
import cookies from 'js-cookie';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

function login ( token, roleName,id ){
    cookies.set('token', token, { expires: 0.125 })
    cookies.set('roleName', roleName, { expires: 0.125 })
    cookies.set('id', id, { expires: 0.125 })
    if(roleName === "ROLE_ADMIN")
       return Router.push("/admin/home")
    return Router.push("/")
}

const loginUrl = `http://localhost:8080/api/auth/login`


class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = { 
            username: '', 
            password: '', 
            usernameValid: false, 
            passwordValid: false,
            isLoginFail : false,
            error: '',
            loading:false
        }

        this.handleChange = this.handleChange.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }

    componentDidMount(){
        if(cookies.get("roleName") === "ROLE_WRITER")
            Router.push("/writers")
        if(cookies.get("token") !== undefined )
        {
            console.log(cookies.get("token") !== "")
            Router.push("/admin/home")
        }
        this.setState({
            loading:false
        })
    }
    componentWillMount(){
        if(cookies.get("token") !== undefined )
        {
            console.log(cookies.get("token") !== "")
            return
        }
        this.setState({
            loading:false
        })
    }
    validateForm(){
        const username = this.state.username
        const password = this.state.password 

        const regEx = '(^[a-zA-Z0-9]+$)|(^(.+)@(.+))'
        const regExPwd = '^.{6,}$'
        if(username==='' || password===''){
            alert('can\'t be empty')
            return false
        } 
        else return true;
    }

    render() {
        if(cookies.get("token") !== undefined || cookies.get("roleName") === "ROLE_WRITER")
        {
            return (<div></div>)
        }
        const handleLogin = () => {
            this.setState({
                loading:true
            })
            if (this.validateForm()){
                fetch(loginUrl, {
                    method: 'POST',
                    body: JSON.stringify({
                      usernameOrEmail: this.state.username,
                      password: this.state.password
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  })

                .then(response => {
                    if(response.status!== 200){
                        this.setState({
                            isLoginFail:true
                        })
                        return
                    }
                    if(response.ok){
                        const token = response.json()
                        console.log("token" + token)
                        return response.json()
                    }
                    else {
                        console.log('lol no')
                        // let error = new Error(response.statusText)
                        // error.response = response
                        // throw error
                    }
                }
                )
                .then(data => {
                    this.setState({
                        loading:false
                    })
                    console.log(data)
                    if(data === undefined)
                        return
                    if(data){
                        const  token  = data.accessToken
                        const role = data.roleName
                        login( token, role, data.userProfileDto.id )
                    } else{

                    }
                })
            }
        }

        return (cookies.get("token") !== undefined  || cookies.get("roleName") === "ROLE_WRITER")? (<div></div>) : (
            <div>
                <style jsx>
                    {`
                .Bg-login{
                    background:url("../../../static/bg-01.jpg");
                    background-size: cover;
                    background-position: center center;
                    height:100%;
                    position:fixed;
                    z-index:-1;
                    width:100%;
                    height:100%;
                    box-shadow: 0px 13px 59px -18px rgba(0,0,0,0.75)
                }
                .form-login{
                    background: white;
                    height:80%;
                    width:80%;
                    margin-left:10%;
                }
                @media only screen and (max-width: 710px) {
                            .bg-part{
                                display: none;
                            }
                            .container{
                                width: 100%;
                            }
                        }
                 @media only screen and (max-width: 1100px) {
                            h3{
                                display: none;
                            }
                        }               
                `}
                </style>
                <div className="Bg-login">

                </div>
                <div style={{ height: "50px", width: "100%" }}>

                </div>
                    <ClipLoader
                    css={`position:fixed; z-index:20; left:45%;top:20%`}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                    />
                <div className="form-login row" style={{ zIndex: "100" }}>
                    <div className=" col-md-5 pt-5 pb-5 container">
                        <div className="row">
                            <div className="col-5">
                                <img style={{ width: "80%", float: "right" }} src="../../../static/logovn.png" />
                            </div>
                            <h3 style={{ textAlign: "center", marginBottom: "50px" }}>Resource Chains</h3>
                        </div>
                        {this.state.isLoginFail ? <p style={{padding:"10px",background: "red",color: "white",textAlign: "center"}}>Your username or email, password is wrong</p> : ""}
                        <FormControl style={{ width: "80%", marginLeft:"30px" }}>
                            <ThemeProvider >
                                <TextField
                                    label="Username"
                                    type="text"
                                    
                                    id="mui-theme-provider-outlined-input"
                                    name="username"
                                    onChange={(e) => (this.setState({[e.target.name] : e.target.value}))}
                                    value = {this.state.username}
                                />
                            </ThemeProvider>
                        </FormControl>


                        <FormControl style={{ width: "80%", marginLeft:"30px", marginTop:"30px" }}>
                            <ThemeProvider>
                                <TextField
                                    label="password"
                                    type="password"

                                    id="mui-theme-provider-outlined-input"
                                    name="password"
                                    onChange={(e) => (this.setState({[e.target.name] : e.target.value}))}
                                    value = {this.state.password}

                                />
                            </ThemeProvider>

                        </FormControl>
                        <div style={{marginTop:"50px",width:"80%", marginLeft:"30px"}}>
                            <div style={{float:"left"}}>
                        <Link href="/">Forgot password ?</Link>

                            </div>
                        <Button onClick={e => handleLogin()} variant="contained" style={{ padding:"15px 30px",float:"right"}} color="primary">
                            Sign Up
                        </Button>
                        </div>
                    </div>
                    <div className="col-md-7 pt-5 bg-part" style={{ background: "#4634342e"}}>
                        <img src="../../../static/loginForm.png" style={{ width: "100%", marginBottom: "100px" }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;