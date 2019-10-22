import React, { Component } from 'react';
import Link from "next/link"
import { play } from 'react-icons-kit/fa/play'
import Button from '@material-ui/core/Button';
import { Icon } from 'react-icons-kit'
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Router from 'next/router';
import FormControl from '@material-ui/core/FormControl';
import fetch from 'unfetch';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = { username: '', password: '', error: ''}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }

    render() {

        const handleLogin = ()=>{
            console.log(this.state.username + this.state.password)
            fetch(`https://jsonplaceholder.typicode.com/users?username=${this.state.username}`)
            .then(response => response.json()
            )
            .then(data => console.log(data[0].username))
            //Router.push("/admin/home")
        }

        return (
            <React.Fragment>
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
                `}
                </style>
                <div className="Bg-login">

                </div>
                <div style={{ height: "50px", width: "100%" }}>

                </div>
                <div className="form-login row" style={{ zIndex: "100" }}>
                    <div className=" col-5 pt-5 container">
                        <div className="row">
                            <div className="col-5">

                                <img style={{ width: "80%", float: "right" }} src="../../../static/logovn.png" />
                            </div>
                            <h3 style={{ textAlign: "center", marginBottom: "50px" }}>Resource Chains</h3>
                        </div>
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
                    <div className="col-7 pt-5" style={{ background: "#4634342e" }}>
                        <img src="../../../static/loginForm.png" style={{ width: "100%", marginBottom: "100px" }} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPage;