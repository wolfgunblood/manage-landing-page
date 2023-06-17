import React from 'react'
import GetStarted from '../GetStarted/GetStarted'

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <h1> Bring everyone together to build better products.</h1>
                <p> Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.</p>
                <GetStarted />
            </div>
            <div className='hero-image'>

            </div>
        </div>
    )
}

export default Hero