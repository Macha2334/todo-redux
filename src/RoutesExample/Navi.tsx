import { NavLink, Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import  "./NavStyle.css"
import Img from "../Img/NavBack.png"
import { useEffect } from "react";
const Navi = () =>{

    return(
        <div>
        <nav className="nav-bar" style={{display:"flex",flexDirection:"row",gap:"10px",backgroundImage:`url(${Img})`,
        backgroundRepeat:"no-repeat",padding:"20px",backgroundSize:"cover"}}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contacts'}>Contacts</NavLink>
        </nav>
        <main>
            <Outlet/>
        </main>
        </div>
    )
}
export default Navi;