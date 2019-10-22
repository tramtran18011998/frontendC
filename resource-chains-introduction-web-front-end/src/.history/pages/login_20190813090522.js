import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../common/layout';
import { login } from '../pages/utils/auth';

class Login extends Component {
    
    static getInitialProps({ req }){
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

        const apiUrl = process.browser
        ? `${protocol}://${window.location.host}/api/login.js`
        : `${protocol}://${req.headers.host}/api/login.js`

        return { apiUrl }
    }

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', error: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    async handleSubmit (event){
        event.preventDefault()
        const username = this.state.username
        const password = this.state.password

        const url = this.props.apiUrl

        try{
            const response = await fetch(url, {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password})
            })

            if(response.ok) {
                const { token } = await response.json()
                login({ token })
            } else {
                console.log('Login failed')

                let error = new Error(response.statusText)
                error.response = response
                return Promise.reject(error)
            }
        } catch (error) {
            console.error('Error in code or network issue', error)
            throw new Error(error)
        }
    }

    render() { 
        return (
            <Layout>
                <div className='login'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>GitHub username</label>

            <input
              type='text'
              id='username'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type='password'
              id='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type='submit'>Login</button>

            <p className={`error ${this.state.error && 'show'}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </form>
        </div>
        <style jsx>{`
          .login {
            max-width: 340px;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          form {
            display: flex;
            flex-flow: column;
          }
          label {
            font-weight: 600;
          }
          input {
            padding: 8px;
            margin: 0.3rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .error {
            margin: 0.5rem 0 0;
            display: none;
            color: brown;
          }
          .error.show {
            display: block;
          }
        `}</style>
            </Layout>
          );
    }
}
 
export default Login;