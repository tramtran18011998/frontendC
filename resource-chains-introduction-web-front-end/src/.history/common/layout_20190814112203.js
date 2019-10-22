import Navbar from "./navbar"
import Footer from "./footer"
import Head from "next/head"

const Layout = (props) =>{
    return (
    <div> 
        <Head>
            <title>{this.props.name}</title>
        </Head>
        {props.children}
        <Footer/>
    </div>
    )
}

export default Layout