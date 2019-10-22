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

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

function withAuthSync (WrappedComponent) {
    return class extends Component {
        static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`
        
        static async getInitialProps (ctx){
            const token = auth(ctx)

            const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx))

            return { ...componentProps, token }
        } 

        constructor(props){
            super(props)

            this.syncLogout = this.syncLogout.bind(this)
        }

        componentDidMount() {
            window.addEventListener('storage', this.syncLogout)
        }

        componentWillUnmount(){
            window.removeEventListener('storage', this.syncLogout)
            window.localStorage.removeItem('logout')
        }

        syncLogout (event){
            if(event.key === 'logout'){
                console.log('logged out from storage')
                Router.push('/login')
            }
        }

        render (){
            return <WrappedComponent {...this.props} />
        }
    }
}

function auth (ctx){
    const { token } = nextCookie(ctx)

    if (ctx.req && !token){
        ctx.req.writeHead(302, { Location: '/login'})
        ctx.req.end()
    }

    if(!token) {
        Router.push('/login')
    }

    return token
}

export { login, logout, withAuthSync, auth }
