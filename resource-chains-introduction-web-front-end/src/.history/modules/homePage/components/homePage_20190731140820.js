import React, { Component } from 'react';
import Link from "next/link"
import {play} from 'react-icons-kit/fa/play'
import Button from '@material-ui/core/Button';
import { Icon } from 'react-icons-kit'

class HomePage extends Component {
    render() {
        const FirstPart = () => (
            <div className="p-5 mx-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src="../static/svgManage.png"></img>
                        </div>
                        <div className="col-md-6">
                        <h1>Resource Chain</h1>
                        <p style={{fontSize:"1rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra.</p>
                        <p style={{fontSize:"0.9rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet.</p>
                        <Link href="/register">
                            <Button variant="contained" color="secondary" >
                                <Icon  style={{marginRight:"5px"}} icon={play} /> Get Start
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
                    <div className="card shadow p-4" style={{borderRadius:'30px'}}>
                        <div className="card-body ">
                            <h1 className="card-title">Manage your workflow</h1>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra.
                            </p>
                            <Link href="/redirect" className="card-link stretched-link">
                                <Button variant="contained" color="secondary" >
                                    <Icon  style={{marginRight:"5px"}} icon={play} /> Get Start
                                </Button>
                            </Link>
                        </div>
                        <img className="card-img-bottom d-block mx-auto my-4" src="../static/card1.png" alt="1st card" style={{width:'60%', height:'auto'}}/>
                    </div>
                    <div className="card shadow p-4" style={{borderRadius:'30px'}}>
                        <img className="card-img-top d-block mx-auto my-4" src="../static/test.png" alt="2nd card" style={{width:'60%', height:'auto'}}/>
                        <div className="card-body">
                            <h1 className="card-title">Manage your team</h1>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra.
                            </p>
                            <Link href="/redirect" className="card-link stretched-link">
                                <Button variant="contained" color="secondary" >
                                    <Icon  style={{marginRight:"5px"}} icon={play} /> Get Start
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

        const ThirdPart = () => (
            <div className="p-5 mx-5">
                <div className="container-fluid">
                    <div  className="row">
                        <div className="col-md-6">
                            <h1 className="text-center" style={{paddingBottom:'3rem'}}>Got questions?</h1>
                            
                        </div>
                        <div  className="col-md-6">
                            <img className="img-fluid" src="../static/third.png"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )

        const FourthPart = () => (
            <div>
                <h1 className="text-center font-weight-bolder text-uppercase text-primary" style={{textShadow:'5px 5px 3px #22222222'}}>Start now!</h1>
                <Link href="/register">
                    <button type="button" className="btn text-light d-block mx-auto shadow">Click here</button>
                </Link>
                <style jsx>
                    {`
                    `}
                </style>
            </div>
        )
        return (
            <React.Fragment>
                <FirstPart />
                <SecondPart />
                <ThirdPart />
                <FourthPart />
            </React.Fragment>
        );
    }
}

export default HomePage;