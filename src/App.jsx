import React from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Hero />
        <AboutUs />
        <Testimonials />
      </div>
      <Footer />
    </>
  )
}

export default App