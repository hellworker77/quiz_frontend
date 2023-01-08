import React from "react";
import navBarStyles from './NavBar.module.css'
import logo from '../../images/logo.png'
import {NavLink} from "react-router-dom";

let NavBar = () => {
    return(
        <div className={navBarStyles.wrapper}>
            <img className={navBarStyles.logo} src={logo} alt={"logo.jsp"} />
            <NavLink to={"/"}  className={({ isActive }) => getActualType(navBarStyles.main, isActive)}>
                Main
            </NavLink>
            <NavLink to={"/leaders"} className={({ isActive }) => getActualType(navBarStyles.leaders, isActive)}>
                Top Users
            </NavLink>
            <NavLink to={"/about"} className={({ isActive }) => getActualType(navBarStyles.about, isActive)}>
                About
            </NavLink>
            <NavLink to={"/user"} className={({ isActive }) => getActualType(navBarStyles.user, isActive)}>
                User
            </NavLink>
        </div>
    )
}
let getActualType =(baseStyle: string, isActive : boolean) : string => {
    let result = baseStyle;
    if(isActive){
        result += " " + navBarStyles.active;
    }
    return result;
}



export default NavBar;