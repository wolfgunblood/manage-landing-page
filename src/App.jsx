import React from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  )
}

export default App