import Navbar from "./navbar"
import Footer from "./footer"
import Head from "next/head"

const Layout = (props) =>{
    return (
    <div> 
        <Head>
        </Head>
        {props.children}
        <Footer/>
    </div>
    )
}

export default Layout