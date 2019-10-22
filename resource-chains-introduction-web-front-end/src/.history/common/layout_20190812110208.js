import Navbar from "./navbar"
import Footer from "./footer"

const Layout = (props) =>{
    return (
    <div> 
        {props.children}
        <Footer/>
    </div>
    )
}

export default Layout