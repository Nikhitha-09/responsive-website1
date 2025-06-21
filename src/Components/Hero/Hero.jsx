import React from 'react'


import family from "../../assets/family.jpg"
import './Hero.css'
const Hero = () => {
  return (
    <div className='container'>
    <div className='hero'>
        <div className="hero-left">
          <h2>Block buster  Deals !  Best Prices !</h2>
       
        <div className="hero-hand-icon">
        <p className='hero-left h2'>New Collections For Everyone......</p>
        </div>
        </div>
        <div className="hero-right">
          <img src={family} alt="" height="400px" />
        </div>
    </div>
  </div>
  )
}

export default Hero