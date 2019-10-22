import { Component } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

function login ({ token }){
    cookie.set('token', token, { expires: 1 })
    Router.push('/admin')
}

function logout(){
    cookie.remove(token)
    window.localStorage.setItem('logout', Date.now())
    Router.push('/login')
}

const   