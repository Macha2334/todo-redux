import { BrowserRouter, Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound";
import App from "../App";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Navi from "./Navi";
import ContactInfo from "./ContactInfo";
const MainRouter = () =>{
    return(
        <App>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navi/>}>
                        <Route index element={<Home/>} />
                        <Route path='home' element={<Home/>} />
                        <Route path='about'   element={<About/>} />
                        <Route path='contacts'  element={<Contact/>} />
                        <Route path='contacts/:id'  element={<ContactInfo/>} />
                        <Route path='*'  element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </App>
    )
}
export default MainRouter;