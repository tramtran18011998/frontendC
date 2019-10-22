import Link from "next/link"
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import styled from 'styled-components';

const MenuLink = (props) => {
    console.log(props.title === "Documents" ? "blue" : "white")
    return (
        <li className="nav-item">
            <style jsx>{`
                .line{
                    height:5px;
                    width:0%;
                    background:blue;
                    transition:all 0.5s
                }
                .nav-item{
                    margin:15px
                }
                .nav-item:hover .line{
                    width:100%;
                    transition:all 0.5s
                }
            `}
            </style>
            <Link className="nav-link" href={`/${props.name}`}>
                <a className="nav-link" color style={{ color: props.title === "Features" ? "blue" : "white" }}>
                    {props.title}
                </a>
            </Link>
            <div className="line"></div>
        </li>
    )
};

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm " style={{ position: "absolute", zIndex: "10", width: "100%" }}>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>

                <div className="collapse navbar-collapse container " id="collapsibleNavId">
                    <Link href="/"><a className="navbar-nav mr-auto"><img className="img-fluid" style={{ height: '50px', filter: 'drop-shadow(2px 2px 0 white)' }} src="../static/logovn.png"></img></a></Link>
                    <ul className="navbar-nav ml-auto mt-0 mt-lg-0 conatiner" style={{ fontSize: "20px" }}>
                        <MenuLink title="Home" name="" />
                        <MenuLink title="Features" name="features" />
                        <MenuLink title="Documents" name="docs" />
                        <MenuLink title="Contact" name="contact" />
                    </ul>

                </div>
            </nav>
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