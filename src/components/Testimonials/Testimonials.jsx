import React from 'react';
import test from '../../data/test';
import GetStarted from '../GetStarted/GetStarted';
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <h2 className='testimonials-title'>What they’ve said</h2>
        <div className='testimonials'>
            {test.map((testimonial) => (
                <div className='testimonial' key={testimonial.id}>
                    <img src={testimonial.avatar} alt="avatar" className='avatar'/>
                    <h3 className='name'>{testimonial.name}</h3>
                    <p className='message'>{testimonial.message}</p>
                </div>
            ))}
        </div>
        <GetStarted />
    </div>
  )
}

export default Testimonials