import React, { Component } from 'react';
import Link from "next/link"
import { play } from 'react-icons-kit/fa/play'
import Button from '@material-ui/core/Button';
import { Icon } from 'react-icons-kit'
import Router from 'next/router';

class HomePage extends Component {
    
    handleDocsPage=(element)=>{
        Router.push("/docs/"+element.split(" ").join(""))
    }
    render() {
        const FirstPart = () => (
            <div className="p-5 mx-5" style={{overflow:"hidden"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 animated zoomIn">
                            <img className="img-fluid" src="../static/svgManage.png"></img>
                        </div>
                        <div className="col-md-6">
                            <h1 className="animated bounceInDown" style={{marginTop:"50px",animationDelay:"0.3s"}}>Resource Chains</h1>
                            <p className=" animated bounceInRight" style={{ fontSize: "20px",animationDelay:"0.8s", marginTop:"30px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet.</p>
                            <p   className=" animated bounceInRight" style={{ fontSize: "0.9rem",animationDelay:"1s", marginTop:"20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/register">
                                <Button variant="contained"  className=" animated bounceInRight" style={{ fontSize: "1rem",animationDelay:"1.2s", marginTop:"20px" }} color="secondary" >
                                    <Icon style={{ marginRight: "5px" }} icon={play} /> Get Start
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )

        const SecondPart = () => (
            <div className="second-part p-5">
                <div className="card-deck mx-5 py-5">
                    <div className="card shadow p-4 " style={{ borderRadius: '30px' }}>
                        <div className="card-body ">
                            <h1 className="card-title">Manage your workflow</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra.
                            </p>
                            <Link href="/redirect">
                                <Button variant="contained" color="secondary" >
                                    <Icon style={{ marginRight: "5px" }} icon={play} /> Get Start
                                </Button>
                            </Link>
                        </div>
                        <img className="card-img-bottom d-block mx-auto my-4" src="../static/card1.png" alt="1st card" style={{ width: '60%', height: 'auto' }} />
                    </div>
                    <div className="card shadow p-4" style={{ borderRadius: '30px' }}>
                        <img className="card-img-top d-block mx-auto my-4" src="../static/test.png" alt="2nd card" style={{ width: '60%', height: 'auto' }} />
                        <div className="card-body">
                            <h1 className="card-title">Manage your team</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra.
                            </p>
                            <Link href="/redirect">
                                <Button variant="contained" color="secondary" >
                                    <Icon style={{ marginRight: "5px" }} icon={play} /> Get Start
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                    .second-part{
                        background-image: url('../static/second.png');
                        background-position: center;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                    }
                    .card{
                        transition: transform 0.5s;
                    }
                    .card:hover{
                        transform: scale(1.05 , 1.05);
                        box-shadow: 5px 5px 2px black, -5px -5px 2px black;
                    }                   
                    `}
                </style>
            </div>
        )

        const Features = () => {
            return (
                <div className="mt-5" style={{marginBottom:"100px"}}>
                    <h1 style={{textAlign:"center"}}>Resource Chains help you</h1>
                <div className="row mx-5 p-5 mt-5">
                <style jsx>
                    {`
                    img{
                        width:60%;
                        margin-left: 20%;
                        height:auto;
                        margin-bottom:20px;
                    }
                    .item{
                        margin-top:40px;
                        cursor:pointer
                    }
                    .item:hover {
                        color:#4635e1
                    }
                    `}
                </style>
                    <div className="item col-12 col-lg-4" onClick={e=>this.handleDocsPage("Time Checker")}>
                        <img className="container" src="../../../static/time.png" />
                        <div className="container">
                            <h3 style={{textAlign:"center", cursor:"pointer"}}>Check your time</h3>
                        </div>
                    </div>
                    <div className="item col-12 col-lg-4" onClick={e=>this.handleDocsPage("Rocket Chat")}>
                        <img className="container" src="../../../static/chat.png" />
                        <div className="container">
                            <h3 style={{textAlign:"center", cursor:"pointer"}}>Contact team member</h3>
                        </div>
                    </div>
                    <div className="item col-12 col-lg-4" onClick={e=>this.handleDocsPage("Gitlab")}>
                        <img className="container" src="../../../static/git.png" />
                        <div className="container">
                            <h3 style={{textAlign:"center", cursor:"pointer"}}>Manage your code</h3>
                        </div>
                    </div>
                    <div className="item col-12 col-lg-4" onClick={e=>this.handleDocsPage("Project")}>
                        <img className="container" src="../../../static/project.png" />
                        <div className="container">
                            <h3 style={{textAlign:"center", cursor:"pointer"}}>Manage your project</h3>
                        </div>
                    </div>
                    <div className="item col-12 col-lg-4" onClick={e=>this.handleDocsPage("Skill Sheet")}>
                        <img className="container" src="../../../static/experience.png" />
                        <div className="container">
                            <h3 style={{textAlign:"center", cursor:"pointer"}}>Manage member skill sheet</h3>
                        </div>
                    </div>
                    <div className="item col-12 col-lg-4" onClick={e=>this.handleDocsPage("Profile")}>
                        <img className="container" src="../../../static/profile.png" />
                        <div className="container">
                            <h3 style={{textAlign:"center", cursor:"pointer"}}>Manage your team profile</h3>
                        </div>
                    </div>
                </div>

                </div>
            )
        }

        const ShowMore=()=>{
            return (
                <div style={{background:"#f6f6f6"}}>
                <div className="row mx-5 mb-5">
                <style jsx>
                    {`
                    img{
                        width:100%;
                    }
                    .show-img{
                        background:url("../../../static/show.PNG");
                        background-size: cover;
                        background-position: center center;
                        width:100%;
                        height:450px;
                        box-shadow: 0px 13px 59px -18px rgba(0,0,0,0.75)
                    }
                    `}
                </style>
                    <h1 className="col-12" style={{textAlign:"center",marginTop:"100px",marginBottom:"100px"}}>See more Resource Chains tool</h1>
                    <div className="col-8 container">
                        <div className="show-img col-12">
                        {/* <img style={{boxShadow: "0px 13px 59px -18px rgba(0,0,0,0.75)",}} src="../../../static/show.PNG" /> */}
                        <div style={{background: "linear-gradient( to bottom, rgba(255,255,255,0) 60%, #efefef 90% )",    position: "absolute",width: "100%",left:"0",top: "0",height:"110%"}}></div>
                        </div>
                    </div>
                    <div className="col-12" style={{textAlign:"center",marginTop:"100px", marginBottom:"100px"}}>
                    <Link href="/features">
                                <Button variant="contained" style={{width:"200px",height:"40px"}} color="secondary" >
                                    Show More
                            </Button>
                    </Link>
                    </div>
                </div>

                </div>
            )
        }

        const ThirdPart = () => (
            <div className="p-5 mx-5 " style={{marginTop:"90px"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 container">
                            <h2 style={{ paddingBottom: '10px', marginTop:"100px" }}>Resource chains is getting better everyday </h2>
                            <p>Let us know if you have any problem, we will find and give you solution anytime you need our support </p>
                    <div className="col-12" style={{marginTop:"50px", marginBottom:"100px"}}>
                    <Link href="/features">
                                <Button variant="contained" style={{width:"200px",height:"40px"}} color="secondary" >
                                    contact us
                    </Button>
                    </Link>
                    </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src="../static/third.png" />
                        </div>

                    </div>
                </div>
            </div>
        )

        return (
            <React.Fragment>
                <FirstPart />
                <SecondPart />
                <Features />
                <ShowMore/>
                <ThirdPart />
            </React.Fragment>
        );
    }
}

export default HomePage;