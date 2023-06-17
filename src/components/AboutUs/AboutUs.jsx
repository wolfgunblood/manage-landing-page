import React from 'react'
import "./AboutUs.scss";
import data from '../../data/data';

const AboutUs = () => {
    console.log(data)
    return (
        <div className='aboutus-container'>
            <div className='aboutus-header'>
                <h2 className='aboutus-title'>What’s different about Manage?</h2>
                <p className='aboutus-description'>Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams. </p>
            </div>
            <div className='details-container'>
                {data.map(item => (
                    <div className='details-item' key={item.index}>
                        <button className='btn-index'>{item.index}</button>
                        <div className='details-content'>
                            <h3 className='deatils-title'>{item.title}</h3>
                            <p className='details-description'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs