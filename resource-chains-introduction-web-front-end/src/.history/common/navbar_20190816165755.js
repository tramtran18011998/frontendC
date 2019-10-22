import Link from "next/link"
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MenuLink = (props) => {
    const router = useRouter()
    const path = router.pathname.replace("/","")
    console.log(path)

    return (
        <li className="nav-item">
            <style jsx>{`
            .line{
                height:5px;
                width:0%;
                background:#f50057;
                transition:all 0.3s
            }
            .nav-item{
                margin:15px
                
            }
            .nav-item:hover .line{
                width:100%;
                transition:all 0.3s;
                color : #f50057;
            }
            .nav-item:hover {
                color : #f50057;
            }
            .line-show{
                height:5px;
                width:100%;
                background:#f50057;
                transition:all 0.3s
            }
        `}
            </style>
            <Link prefetch={true} rel="" className="nav-link" href={`/${props.name}`}>
                <a className="nav-link" style={{ margin: "15px", marginBottom: "0px", color: props.name.toLowerCase() === path ? "#f50057" : "black" }} >
                    {props.title}
                </a>
            </Link>
            <div className={ props.name.toLowerCase() === path ? "line-show" : "line"}></div>
        </li>
    )
};

class Navbar extends Component {
    render() {
        console.log(this.props)
        return (
            <nav class="navbar navbar-expand-lg navbar-light container" style={{ position: "relative", zIndex: "10", width: "100%" }}>
                <Link href="/"><a className="navbar-nav mr-auto"><img className="img-fluid" style={{ height: '50px', filter: 'drop-shadow(2px 2px 0 white)' }} src="../static/logovn.png"></img></a></Link>

                <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <MenuLink {...this.props} title="Home" name="" />
                        <MenuLink {...this.props} title="Features" name="features" />
                        <MenuLink {...this.props} title="Documents" name="docs" />
                        <MenuLink {...this.props} title="Register" name="register" />
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