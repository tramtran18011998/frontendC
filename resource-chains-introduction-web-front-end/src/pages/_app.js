import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import configureStore from "../stores"
import { ConnectedRouter } from 'connected-react-router';

const {store, history}  = configureStore()

class MyApp extends App{
    render(){
    const { Component, pageProps, reduxStore } = this.props
        return(
            <Container>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Component {...pageProps}/>
                    </ConnectedRouter>
                </Provider>
            </Container>
        )
    }
}
export default MyApp;