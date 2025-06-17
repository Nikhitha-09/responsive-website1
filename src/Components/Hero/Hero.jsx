// import React from 'react'
// import "./Hero.css"
// import hand_icon from "../../assets/hand_icon.png"
// import arrow_icon from "../../assets/arrow_icon.png"
// import family from "../../assets/family.jpg"
// const Hero = () => {
//   return (
//     <div className='hero'>
//         <div className="hero-left">
// <h2>Block buster  Deals !  Best Prices !</h2>
       
//         <div className="hero-hand-icon">
//             <p>new</p>
//             <i className="bi bi-arrow-right-circle"></i>
//             <img src={hand_icon} alt="" height="60px" />
//         </div>
//         <p>collections</p>
//         <p>for everyone</p>
//         <div className="hero-latest-btn">
//             <div>Trending Collection</div>
//             <img src={arrow_icon} alt="" height="30px"/>
//         </div>
//         </div>
        
//         <div className="hero-right">
//   <img src={family} alt="" height="400px" />
//         </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'


import family from "../../assets/family.jpg"
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>Block buster  Deals !  Best Prices !</h2>
       
        <div className="hero-hand-icon">
        <p>new</p>
        <p>collections</p>
        <p>for everyone</p>
        </div>
        </div>
        
        <div className="hero-right">
  <img src={family} alt="" height="400px" />
        </div>
    </div>
  )
}

export default Hero