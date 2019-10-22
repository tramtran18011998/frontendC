import React, { Component } from 'react';
import Link from "next/link"
import {play} from 'react-icons-kit/fa/play'
import Button from '@material-ui/core/Button';
import { Icon } from 'react-icons-kit'

class HomePage extends Component {
    render() {
        const FirstPart = () => (
            <div className="pt-5">
                <div className="p-3 container-fluid">
                    <div className="row">
                        <div className="col-md-6 ">
                            <img className="img-fluid" src="../static/svgManage.png"></img>
                        </div>
                        <div className="col-md-5 mt-5 ml-5">
                            <h1>Resource Chain</h1>
                            <p style={{ fontSize: "1rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra. Nunc vehicula mollis est, eu egestas velit vestibulum a. Duis ut tempus dolor. Maecenas nec libero vitae arcu condimentum laoreet non vel neque. Integer bibendum turpis id blandit bibendum. Quisque in dolor id diam pellentesque maximus.</p>
                            <p style={{ fontSize: "0.9rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra. Nunc vehicula mollis est, eu egestas velit vestibulum a. Duis ut tempus dolor. Maecenas nec libero vitae arcu condimentum laoreet non vel neque. Integer bibendum turpis id blandit bibendum. Quisque in dolor id diam pellentesque maximus.</p>
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
            <div className="second-part">
                <div className="card-deck mx-lg-5 py-5">
                    <div className="card m-md-5 shadow" style={{ borderRadius: '30px' }}>
                        <div className="card-body px-sm-5 py-5">
                            <h1 className="card-title">Manage your workflow</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra. Nunc vehicula mollis est, eu egestas velit vestibulum a. Duis ut tempus dolor. Maecenas nec libero vitae arcu condimentum laoreet non vel neque. Integer bibendum turpis id blandit bibendum. Quisque in dolor id diam pellentesque maximus.
                            </p>
                            <Link href="/redirect"><a className="card-link btn btn-primary text-light">Learn More</a></Link>
                        </div>
                        <img className="card-img-bottom p-5" src="../static/card1.png" alt="" />
                    </div>
                    <div className="card m-md-5 shadow" style={{ borderRadius: '30px' }}>
                        <img className="card-img-top p-5 img-fluid" src="../static/test.png" alt="" />
                        <div className="card-body px-sm-5 py-5">
                            <h1 className="card-title">Manage your team</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus tincidunt erat pellentesque venenatis. Maecenas molestie quis sem nec laoreet. Nam tellus orci, tincidunt vitae massa ac, auctor dignissim nulla. Duis rutrum tristique mauris eget pharetra. Nunc vehicula mollis est, eu egestas velit vestibulum a. Duis ut tempus dolor. Maecenas nec libero vitae arcu condimentum laoreet non vel neque. Integer bibendum turpis id blandit bibendum. Quisque in dolor id diam pellentesque maximus.
                            </p>
                            <Link href="/redirect"><a className="card-link btn btn-primary text-light">Learn More</a></Link>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                    .second-part{
                        padding: 80px 10px;
                        background-image: url('../static/second.png');
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }.
                    .card-img-bottom{
                        max-width: 100% !important;
                        height: auto !important;
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
            <div className="container-fluid py-md-5 my-md-5">
                <div className="row py-sm-5 my-sm-5">
                    <div className="col-md-4 p-md-5">
                        <h1 className="px-5">Got questions?</h1>

                    </div>
                    <div className="col-md-6" style={{}}>
                        <img className="img-fluid" src="../static/third.png" />
                    </div>

                </div>
            </div>
        )

        const FourthPart = () => (
            <div>
                <h1 className="text-center font-weight-bolder text-uppercase text-primary my-5" style={{ textShadow: '5px 5px 3px #22222222' }}>Start now!</h1>
                <Link href="/register">
                    <button type="button" className="btn text-light px-4 py-2 my-5 d-block mx-auto shadow">Click here</button>
                </Link>
                <style jsx>
                    {`
                    button{
                        background-image: linear-gradient(#4776E6 0%, #87CEFA 100%)
                    }
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