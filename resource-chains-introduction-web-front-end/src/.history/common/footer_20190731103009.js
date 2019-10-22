import React, { Component } from 'react';
import Link from 'next/link';

const Footer = () => (
    <div className="box">
        <img className="bg" src="../static/footer.png"/>
        <div className="content">
        <img src="../static/logovn.png" style={{height:'90px', marginTop:'-50px'}}></img>
        <p>
            contact info of comapny here
        </p>
        <div style={{position:'absolute',bottom:'10px', transform:'translate(0, 100%)'}}>
            <Link href="#">
                <a role="button" className="btn btn-outline-dark" style={{border:'none'}}><i className="fa fa-facebook fa-3x p-4"></i></a>
            </Link>
            <Link href="#">
                <a role="button" className="btn btn-outline-dark" style={{border:'none'}}><i className="fa fa-twitter fa-3x p-4"></i></a>
            </Link>
            <Link href="#">
                <a role="button" className="btn btn-outline-dark" style={{border:'none'}}><i className="fa fa-rocket fa-3x p-4"></i></a>
            </Link>
        </div>
        </div>
        <style jsx>{`
            .bg{
                width: 100%;
                height: auto;
            }
            .box{
                padding-top: 100px;
                position: relative;
            }
            .content{
                position: absolute;
                top:300px;
                left: 50px;
                
            }
            p{
                padding: 40px;
            }
        `}
        </style>
    </div>
)

export default Footer;