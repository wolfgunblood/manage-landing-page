import React from 'react';
import "./Hero.scss";
import GetStarted from '../GetStarted/GetStarted';
import Intro from "../../assets/images/illustration-intro.svg";
// import Bg from "../../assets/images/bg-simplify-section-desktop.svg";

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <h1 className='hero-content-title'> Bring everyone together to build better products.</h1>
                <p className='hero-content-description'> Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.</p>
                <GetStarted />
            </div>
            <div className='hero-image'>
                <img src={Intro} alt="Ilustration Intro" />
            </div>
        </div>
    )
}

export default Hero