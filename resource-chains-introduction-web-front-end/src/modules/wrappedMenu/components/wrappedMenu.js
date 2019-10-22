import React, { Component } from 'react';
import Router from 'next/router'
import Link from "next/link"

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { ic_assignment } from 'react-icons-kit/md/ic_assignment'
import { user } from 'react-icons-kit/fa/user'
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { userPlus } from 'react-icons-kit/fa/userPlus'
import { times } from 'react-icons-kit/fa/times'
import { thList } from 'react-icons-kit/fa/thList'
import { ellipsisV } from 'react-icons-kit/fa/ellipsisV'
import { pencil } from 'react-icons-kit/fa/pencil'
import {ic_arrow_back} from 'react-icons-kit/md/ic_arrow_back'
import {ic_list} from 'react-icons-kit/md/ic_list'
import cookies from 'js-cookie';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

class WrappedMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            openMenu: false,
            route: "",
            loading:true,
            oldRoute : ""
        }
    }
    componentDidMount() {
        this.setState({
            route: Router.router.route.substring(7, Router.router.route.length)
        })
        if (cookies.get("token") === undefined || cookies.get("token") === "" ) {
            Router.push("/admin")
        }
        if(cookies.get("roleName") === "ROLE_WRITER")
            Router.push("/")
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
        if (cookies.get("token") === undefined || cookies.get("token") === "" || cookies.get("roleName") === "ROLE_WRITER") {
            return <div></div>
        }
        const handleToggle = () => {
            this.setState({
                toggle: !this.state.toggle
            })
        }
        const handleClick = () => {
            this.setState({
                openMenu: !this.state.openMenu
            })
        }
        return (
            <React.Fragment>
                <style jsx>
                    {`
                    @media only screen and (max-width: 720px) {
                            .wrapped-icon{
                                opacity : 1
                            }
                        }
                        .line {
                        width: 300px;
                        left:-320px;
                        height: 40px;
                        position: absolute;
                        background: #8574d4;
                        z-index:-1;
                        transition:all 0.3s
                        }
                        .line:after {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 0;
                        height: 0;
                        border-left: 20px solid white;
                        border-top: 20px solid transparent;
                        border-bottom: 20px solid transparent;
                        }
                        .line:before {
                        content: "";
                        position: absolute;
                        right: -20px;
                        bottom: 0;
                        width: 0;
                        height: 0;
                        border-left: 20px solid #8574d4;
                        border-top: 20px solid transparent;
                        border-bottom: 20px solid transparent;
                        }
                        .item:hover .line{
                            left:-20px;
                            transition:all 0.3s
                        }
                        .item{
                            margin-top:20px;
                            cursor:pointer
                        }
                        .active-item .line{
                            left:-20px;
                        }
                        .active-item {
                            margin-top:20px;
                            cursor:pointer
                        }
                        body{
                            padding:0px!important
                        }
                `}
                </style>
                <div style={{ position: "fixed", background: "#f5f6fa", width: "100%", height: "100%" }}>

                </div>
                    <ClipLoader
                    css={`position:fixed; z-index:20; left:45%;top:20%`}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                    />
                <div className="row" style={{ width: "100%", marginRight: "0px", marginLeft: "0px" }}>

                    <div className="wrapped-header" style={{ width: "100%", height: "80px", background: "white", borderBottom: "1px solid #00000026", zIndex: "10", marginRight: "0px", marginLeft: "0px", position: "fixed" }}>
                        <div style={{ float: "right", marginTop: "10px", marginRight: "70px" }}>
                            <span style={{ marginRight: "10px" }}>Hi Long</span>

                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {popupState => (
                                    <React.Fragment>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true" {...bindTrigger(popupState)}>
                                            
                                            <Icon className="wrapped-icon" style={{ marginBottom: "5px", marginRight: "5px", height: "32px", width: "32px", borderRadius: "50%" }} icon={ellipsisV} />
                                        </IconButton>
                                        <Menu {...bindMenu(popupState)} style={{ width: "500px" }}>
                                            <MenuItem onClick={popupState.close} style={{ width: "150px" }}>User info</MenuItem>
                                            <MenuItem onClick={e => {
                                                this.handleLogout()
                                                this.setState({
                                                    loading:true
                                                })
                                                popupState.close()
                                            }} style={{ width: "150px" }}>Logout</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </div>
                    </div>
                    <div className="Menu col-lg-3 col-xl-2 col-md-3 col-sm-5 col-6 row" style={{ position: "fixed", height: "100%", top: "0px", left: this.state.toggle === false ? "-15px" : "-250px", transition: "all 0.1s", zIndex: "100", background: "#2c323e" }}>
                        <div className="col-12 row" style={{background:"white",height:"80px",marginLeft:"15px"}}>
                        <div className="col-11 col-lg-10 mt-4" style={{ height: "60px" }}>
                            <img onClick={() => {
                                    this.setState({
                                        loading:true
                                    })
                                    Router.push("/admin/home")
                                    this.setState({
                                        loading:false
                                    })}} style={{ width: "100%", cursor: "pointer" }} src="../../../static/logovn.png" />

                        </div>

                        </div>
                        <Icon style={{ marginBottom: "5px", marginRight: "5px", transition: "all 0.05s", position: "absolute", right: this.state.toggle === false ? "0px" : "-120px", top: "30px", color: "#0000009e", cursor: "pointer", zIndex: "100" }} size={!this.state.toggle ? "25" : "35"} icon={this.state.toggle === false ? ic_arrow_back : ic_list} onClick={() => handleToggle()} />
                        <ul className="col-12" style={{ position: "absolute", top: "100px",overflow:"hidden",width:"94%",marginRight:"10px" }}>
                            <li className={this.state.route === "home" ? "active-item" : " item "}>
                                <div className="line"></div>
                                <div onClick={() => {
                                    this.setState({
                                        loading:true
                                    })
                                    Router.push("/admin/home")}} style={{ width: "100%", color: "white",zIndex:"10",paddingTop:"5px" }}>
                                    <span style={{ paddingLeft: "40px" }}><Icon size={15} style={{ marginBottom: "5px", marginRight: "5px" }} icon={home} /> Dashboard</span>
                                </div>

                            </li>
                            <li className={this.state.route.indexOf("docs") !== -1? "active-item" : "item "}>
                                <div className="line"></div>
                                <div color={this.state.route === "docs" ? "primary" : "white"} onClick={() => {
                                    this.setState({
                                        loading:true
                                    })
                                    Router.push("/admin/docs")}} style={{ width: "100%", color: "white",paddingTop:"5px" }}>
                                    <span style={{ paddingLeft: "40px" }}> <Icon size={15} style={{ marginBottom: "5px", marginRight: "5px" }} icon={ic_assignment} /> Documents</span>
                                </div>

                            </li>
                            <li className={this.state.route === "writers" ? "active-item" : " item "}>
                                <div className="line"></div>
                                <div color={this.state.route === "writers" ? "primary" : "white"} onClick={() => {
                                    this.setState({
                                        loading:true
                                    })
                                    Router.push("/admin/writers")}} 
                                    style={{ width: "100%", color: "white",paddingTop:"5px" }}>
                                    <span style={{ paddingLeft: "40px" }}><Icon size={15} style={{ marginBottom: "5px", marginRight: "5px" }} icon={pencil} /> Writers</span>

                                </div>
                            </li>
                            <li className={this.state.route === "contacts" ? "active-item" : " item "}>
                                <div className="line"></div>
                                <div color={this.state.route === "contacts" ? "primary" : "white"} onClick={() => {
                                    this.setState({
                                        loading:true
                                    })
                                    Router.push("/admin/contacts")}} 
                                    style={{ width: "100%", color: "white",paddingTop:"5px" }}>
                                    <span style={{ paddingLeft: "40px" }}><Icon size={15} style={{ marginBottom: "5px", marginRight: "5px" }} icon={envelopeO} />  Contacts</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {
                        !this.state.toggle ? <div className="col-0 col-lg-2 "></div> : <div className="col-0 col-lg-1"></div>
                    }

                    <div className={!this.state.toggle ? "col-12 col-lg-10" : "col-12 col-lg-11"} style={{ width: "100%", marginTop: "100px" }}>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WrappedMenu;