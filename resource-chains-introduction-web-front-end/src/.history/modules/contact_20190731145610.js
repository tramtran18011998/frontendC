import React, { Component } from 'react';
import Head from '../components/head';

export default class ServiceForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullname :'', 
            email :'', 
            cName: '',   cAdd: '',    cNum: '',
            pNum: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    render(){
        return <div className="bg">
                <Head />
                  <div className="container-fluid">
                      <div className="row">
                          <div className="form-group col-xl-4 m-5 p-2 bg-dark text-light">
                              <form action="" onSubmit = {this.handleSubmit} method="POST" className="p-5 m-2">
                                  <h1 className="text-center">Subsciption</h1>
                                  <div >Full Name</div>
                                  <input type="text"value = {this.state.value}  onChange={this.handleChange} name="fullname" id="fullname" className="form-control bg-dark text-light" required/>
                                  <div >Email</div>
                                  <input type="email" value = {this.state.value} onChange={this.handleChange} name="email" id="email" className="form-control bg-dark text-light" required/>
                                  <div >Company's Name</div>
                                  <input type="text" value = {this.state.value} onChange={this.handleChange} name="cName" id="cName" className="form-control bg-dark text-light" required/>
                                  <div >Company's Address</div>
                                  <input type="text" value = {this.state.value} onChange={this.handleChange} name="cAdd" id="cAdd" className="form-control bg-dark text-light" required/>
                                  <div >Company's Number</div>
                                  <input type="tel" pattern="^[0-9\-\+]{9,15}$" title="Please input only numbers" value = {this.state.value} onChange={this.handleChange} name="cNum" id="cNum" className="form-control bg-dark text-light" required/>
                                  <div >Personal Number</div>
                                  <input type="tel" pattern="^[0-9\-\+]{9,15}$" title="Please input only numbers" value = {this.state.value} onChange={this.handleChange} name="pNum" id="pNum" className="form-control bg-dark text-light" required/>
                                  <button type="submit" className="btn btn-primary m-4 submit">Submit</button>
                              </form>
                            </div>
                      </div>
                  </div>
                  <img className="img-fluid float-right" style={{marginTop: '-400px', width: '40%', zIndex:'5'}} src='../static/pngWorking.png'></img>
                    <style jsx>{` 
                        body, html {
                        height: 100%;
                        }             
                        .bg{
                            height:100%;
                            background-image: url('../static/service.png');
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                        body{
                            height: 100%;
                        }
                        input{
             
                            margin: 10px auto;
                            padding: 15px;
                        }
                        .form-group{
                            border-radius: 25px;
                        }
                        .submit{
                            padding: 10px 15px;
                            border: 1px solid #ffffff88
                        }
                        .form{
                            margin-top: 40px;
                        }
                    `}
                    </style>
                  </div>
    }
}

