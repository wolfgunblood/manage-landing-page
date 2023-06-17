import React from 'react';
import "./Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import GetStarted from '../GetStarted/GetStarted';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <img src={Logo} alt="Logo" />
            </div>
            <ul className='nav-list'>
                <li className='nav-item'>Pricing</li>
                <li className='nav-item'>Product</li>
                <li className='nav-item'>About Us</li>
                <li className='nav-item'>Careers</li>
                <li className='nav-item'>Community</li>
            </ul>
            <GetStarted />
        </div>
    )
}

export default Navbar