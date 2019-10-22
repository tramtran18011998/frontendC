import Link from "next/link"
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import styled from 'styled-components';
import {bars} from 'react-icons-kit/fa/bars'
import Button from '@material-ui/core/Button';
import cookies from 'js-cookie'
import Router from 'next/router';
import { ClipLoader } from 'react-spinners';
import { Icon } from 'react-icons-kit'

const MenuLink = (props) => {
    console.log(props.title === "Documents" ? "blue" : "white")
    return (
        <li className="nav-item">
            <style jsx>{`
                .line{
                    height:3px;
                    width:0%;
                    background:#4630EB;
                    transition:all 0.3s
                }
                .nav-item{
                    margin:15px
                }
                .nav-item:hover .line{
                    width:100%;
                    transition:all 0.3s
                }
                .line-show{
                    height:3px;
                    width:100%;
                    background:#4630EB;
                    transition:all 0.3s
                }
            `}
            </style>
            <Link className="nav-link" href={`/${props.name}`}>
                <a className="nav-link" color style={{ color: props.title === "Features" ? "white" : "#ffffffb3" }}>
                    {props.title}
                </a>
            </Link>
            <div className={props.title === "Features" ? "line-show" : "line"}></div>
        </li>
    )
};

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:true,
        }
    }
    componentDidMount(){
        this.setState({
            loading:false
        })
    }
    handleLogout = () => {
        cookies.set("token", "", { expires: 0.000 })
        cookies.set("roleName", "", { expires: 0.000 })
        cookies.set('id', "", { expires: 0 })
        Router.push("/admin")
    }
    render() {
        const handleClick = () => {
            this.setState({
                loading: true
            })
            console.log(this.state)
        }
        console.log(this.props)
        return (
            <div style={{background:"black", width:"100%"}}>
            <nav class="navbar navbar-expand-lg header-feature container" style={{position:"relative", zIndex: "10", backgroundColor:"black" }}>
                <Link href="/"><a className="navbar-nav mr-auto"><img className="img-fluid" style={{ height: '50px', filter: 'drop-shadow(2px 2px 0 white)' }} src="../static/logovn.png"></img></a></Link>

                <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Icon size={30} style={{color:"white"}} icon={bars} />
                </button>

                
                <ClipLoader
                    css={`position:fixed; z-index:20; left:45%;top:20%`}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                    />

                <div class="collapse navbar-collapse ml-5 " id="navbarSupportedContent">
                    
                <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    {cookies.get("roleName") === "ROLE_WRITER" ?
                        <ul class="navbar-nav mr-auto">
                            <MenuLink {...this.props} handleClick={handleClick}  title="Features" name="features" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Documents" name="docs" />
                        </ul>
                        :
                        <ul class="navbar-nav mr-auto">
                            <MenuLink {...this.props} handleClick={handleClick} title="Home" name="" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Features" name="features" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Documents" name="docs" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Register" name="register" />
                        </ul>
                    }
                </div>
                </div>
                {cookies.get("roleName") === "ROLE_WRITER"?
                <div style={{marginTop:"20px"}}>
                <Button variant="contained" color="primary" style={{ position: "relative", right: "0px",marginRight:"20px" }} >
                    Your Document
                </Button>
                <Button variant="contained" color="secondary" style={{ position: "relative", right: "0px" }} onClick={e=>this.handleLogout()}>
                    Logout
                </Button>

                </div>:
                ""}
            </nav>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}
export default withRouter(
    connect(
        mapStateToProps,
        null
    )(Navbar)
);