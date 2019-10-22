import Link from "next/link"
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import cookies from 'js-cookie'
import Router from 'next/router';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/router';

const MenuLink = (props) => {
    const router = useRouter()
    const path = router.pathname.replace("/", "")

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
            <Link prefetch={true} className="nav-link" href={`/${props.name}`}>
                <a className="nav-link" onClick={props.handleClick} style={{ margin: "15px", marginBottom: "0px", color: props.name.toLowerCase() === path ? "#f50057" : "black" }} >
                    {props.title}
                </a>
            </Link>
            <div className={props.name.toLowerCase() === path ? "line-show" : "line"}></div>
        </li>
    )
};

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:true,
            route : ""
        }
    }
    componentDidMount(){
        this.setState({
            loading:false,
            route: Router.router.route
        })
        console.log(Router.router.route)
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
        return (
            <nav className="navbar navbar-expand-lg navbar-light container" style={{ position:"relative", zIndex: "10", width: "100%" }}>
                <Link href="/"><a className="navbar-nav mr-auto"><img className="img-fluid" style={{ height: '50px', filter: 'drop-shadow(2px 2px 0 white)' }} src="../static/logovn.png"></img></a></Link>

                <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <ClipLoader
                    css={`position:fixed; z-index:20; left:45%;top:20%`}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                    />
                <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    {cookies.get("roleName") === "ROLE_WRITER" ?
                        <ul className="navbar-nav mr-auto">
                            <MenuLink {...this.props} handleClick={handleClick}  title="Features" name="features" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Documents" name="docs" />
                        </ul>
                        :
                        <ul className="navbar-nav mr-auto">
                            <MenuLink {...this.props} handleClick={handleClick} title="Home" name="" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Features" name="features" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Documents" name="docs" />
                            <MenuLink {...this.props} handleClick={handleClick}  title="Register" name="register" />
                        </ul>
                    }
                </div>
                {cookies.get("roleName") === "ROLE_WRITER"?
                <div style={{marginTop:"20px"}}>
                <Button variant="contained" onClick={e=>Router.push("/writers")} color="primary" style={{ position: "relative", right: "0px",marginRight:"20px" }} >
                    Your Document
                </Button>
                <Button variant="contained" color="secondary" style={{ position: "relative", right: "0px" }} onClick={e=>this.handleLogout()}>
                    Logout
                </Button>

                </div>:
                ""}
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