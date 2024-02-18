import React from "react";
import Logo from '../imgs/logo2.png';
import './Header.css'

const Header = () =>{
    return(
    <header class="header">
        <a href="#">
            <img class="logo" src={Logo} alt="Logo" />
        </a>
        
    </header>
    )
}
export default Header;