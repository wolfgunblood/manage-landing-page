import React from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App