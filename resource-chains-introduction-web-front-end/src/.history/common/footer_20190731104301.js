import React, { Component } from 'react';
import Link from 'next/link';

const Footer = () => (
    <div className="box">
        <img className="bg" src="../static/footer.png"/>
        <div className="content">
        <img src="../static/logovn.png" style={{height:'60px', marginTop:'-50px', marginRight:'6rem'}}></img>
        <p className="py-5">
            <p>
                Address: 77 Tran Nhan Ton Street, District 5, HCM City.
            </p>
            <p>
                <i class="fa fa-phone" aria-hidden="true"></i> Tel: 
            </p>
        </p>
        </div>
        <div style={{position:'absolute',bottom:'20px', right:'250px'}}>
            <span>Social Media: </span>
            <Link href="#">
                <a role="button" className="btn btn-outline-dark" style={{border:'none'}}><i className="fa fa-facebook fa-2x p-2"></i></a>
            </Link>
            <Link href="#">
                <a role="button" className="btn btn-outline-dark" style={{border:'none'}}><i className="fa fa-twitter fa-2x p-2"></i></a>
            </Link>
            <Link href="#">
                <a role="button" className="btn btn-outline-dark" style={{border:'none'}}><i className="fa fa-rocket fa-2x p-2"></i></a>
            </Link>
        </div>
        <style jsx>{`
            .bg{
                width: 100%;
                height: 320px;
            }
            .box{
                padding-top: 100px;
                position: relative;
            }
            .content{
                position: absolute;
                top:170px;
                left: 6rem;
                
            }
           
        `}
        </style>
    </div>
)

export default Footer;