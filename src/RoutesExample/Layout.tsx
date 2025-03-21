import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound";
import App from "../App";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Navi from "./Navi";
import ContactInfo from "./ContactInfo";
const Layout = () =>{
    return(<div>
            <nav>
                
            </nav>
            <main></main>
            <footer>Footer</footer>
            </div>
    )
}
export default Layout;