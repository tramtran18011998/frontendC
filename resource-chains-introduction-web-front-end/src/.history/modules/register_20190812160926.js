import React, { Component } from 'react';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {user} from 'react-icons-kit/fa/user'
import { Icon } from 'react-icons-kit'
import Button from '@material-ui/core/Button';

export default class ServiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            cName: '', cAdd: '', cNum: '',
            pNum: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.fullname + this.state.email + this.state.cName + this.state.cNum + this.state.cAdd + this.state.pNum);
    }

    render() {
        return <div style={{ width: "100%", height: "600px" }} className="container">
            <div className="clear-fix">
                <div className="container text-light float-left p-5 m-sm-5 rounded shadow" style={{ background: "#fff4f4" }}>
                    <h1 style={{color:"black"}}>Subscribe Now!</h1>
                    <form onSubmit={this.handleSubmit} method="POST" className="">
                        <div className="">Personal Info</div>
                        <div className="form-group row">
                            <label className="col-form-label"><i className="fa fa-user fa-fw" aria-hidden="true"></i></label>
                            <div className="col-md-12">
                            <TextField
                                id="standard-name"
                                label="Full Name"
                                margin="normal"
                                style={{width:"100%"}}
                            />
                            </div>
                            <label className="col-form-label"><i className="fa fa-envelope fa-fw" aria-hidden="true"></i></label>
                            <div className="col-md-6" >
                            <TextField
                                id="standard-name"
                                label="Email"
                                margin="normal"
                            />
                            </div>
                            <div className="col-md-6">
                            <TextField
                                style={{width:"100%"}}
                                id="standard-name"
                                label="Company Name"
                                margin="normal"
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label"><i className="fa fa-building fa-fw" aria-hidden="true"></i></label>
                            <div className="col-md-12">
                            <TextField
                                id="standard-name"
                                label="Address"
                                margin="normal"
                                style={{width:"100%"}}
                            />
                            </div>
                            <label className="col-form-label"><i className="fa fa-address-book fa-fw" aria-hidden="true"></i></label>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label"><i className="fa fa-mobile fa-fw" aria-hidden="true"></i></label>
                            <div className="col-md-6">
                            <TextField
                                id="standard-name"
                                label="Phone Number"
                                margin="normal"
                            />
                            </div>
                            <label className="col-form-label"><i className="fa fa-phone fa-fw" aria-hidden="true"></i></label>
                            <div className="col-md-6">
                            <TextField
                                id="standard-name"
                                label="Company Phone Number"
                                margin="normal"
                                style={{width:"100%"}}
                            />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <div className="col-3">

                            </div>
                            <div className="col-md-3">
                                <Button variant="contained" 
                                 color="secondary"
                                    style={{width:"200px", marginTop:"30px"}}
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                <img src="../static/journey.png" className="float-right" alt="bg-img" style={{ width: '50%', marginTop: '-400px',paddingLeft: '50px', zIndex: '-100' }} />
            </div>
            <style jsx>{` 
                        body, html {
                        height: 100%;
                        }
                        .container{
                            width: 50%;
                            margin-bottom: 40px;
                        }
                        input{
                            background-color: black  !important;
                            color: #f8f9fa !important;
                        }
                        @media only screen and (max-width: 1200px) {
                            img{
                                display:none;
                            }
                            .container{
                                width: 100%;
                            }
                        }
                    `}
            </style>
        </div>
    }
}