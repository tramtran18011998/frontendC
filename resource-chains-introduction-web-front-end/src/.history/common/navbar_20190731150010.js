import Link from "next/link"
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import styled from 'styled-components';

const MenuLink = (props) => {
    console.log(props.color)
    return (
        <li className="nav-item">
            <Link className="nav-link" href={`/${props.name}`}>
                <a className="nav-link" style={{ margin: "15px" }} >
                    {props.title}
                </a>
            </Link>
        </li>
    )
};

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light container" style={{ position: "relative", zIndex: "10", width: "100%" }}>
                <Link href="/"><a className="navbar-nav mr-auto"><img className="img-fluid" style={{ height: '50px', filter: 'drop-shadow(2px 2px 0 white)' }} src="../static/logovn.png"></img></a></Link>

                <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
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