import React from 'react';
import "./Footer.scss"
import Insta from "../../assets/images/icon-instagram.svg"
import Twitter from "../../assets/images/icon-twitter.svg"
import Pin from "../../assets/images/icon-pinterest.svg"
import Youtube from "../../assets/images/icon-youtube.svg"
import Facebook from "../../assets/images/icon-facebook.svg"
import Logo from "../../assets/images/logo.svg"


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='contact-container'>
                <h3 className='contact-title'> Simplify how your team works today.</h3>
                <button className='custom-button'>Get Started</button>
            </div>
            <div className='footer'>
                <div className='footer-social'>
                    {/* <div className='footer-logo'> */}
                        <img src={Logo} alt="logo" className='logo' />
                    {/* </div> */}
                    <ul className='footer-social-list'>
                        <li className='footer-social-item'><img src={Facebook} alt="facebook" /></li>
                        <li className='footer-social-item'><img src={Insta} alt="instagram" /></li>
                        <li className='footer-social-item'><img src={Twitter} alt="twitter" /></li>
                        <li className='footer-social-item'><img src={Youtube} alt="youtube" /></li>
                        <li className='footer-social-item'><img src={Pin} alt="pinterest" /></li>
                    </ul>
                </div>
                <div className='footer-links'>
                    <ul className='footer-links-list'>
                        <li className='footer-links-item'>Home</li>
                        <li className='footer-links-item'>Pricing</li>
                        <li className='footer-links-item'>Products</li>
                        <li className='footer-links-item'>About Us</li>
                    </ul>
                    <ul className='footer-links-list'>
                        <li className='footer-links-item'>Careers</li>
                        <li className='footer-links-item'>Community</li>
                        <li className='footer-links-item'>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-search-container">
                    <div className='footer-search'>
                        <input type="text" className='search-input' placeholder='Search' />
                        <button className='btn-search' type="submit">Go</button>
                    </div>
                    <p className='copyright'>© 2021 Untitled. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer