// import React from 'react'
// import "./Basic.css"

// import family from "../../assets/family.jpg"
// const Basic = () => {
//   return (
//     <div className='hero'>
//         <div className="hero-left">
// <h2>Block buster  Deals !  Best Prices !</h2>
       
//         <div className="hero-hand-icon">
//         <p>new</p>
//         <p>collections</p>
//         <p>for everyone</p>
//         </div>
//         </div>
        
//         <div className="hero-right">
//   <img src={family} alt="" height="400px" />
//         </div>
//     </div>
//   )
// }

// export default Basic

import React from 'react';
import './Basic.css';

import hand_icon from '../../assets/hand_icon.png';
import arrow_icon from '../../assets/arrow_icon.png';
import family from '../../assets/family1.jpg';

import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import NewCollections from '../NewCollections/NewCollections';
import Newsletter from '../NewsLetter/NewsLetter';

const Basic = () => {
  return (
    <div className="basic-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <h2>Blockbuster Deals! Best Prices!</h2>
          <div className="hero-hand-icon">
            <i className="bi bi-arrow-right-circle"></i>
          </div>
          <p>New</p>
          <p>Collections</p>
          <p>For Everyone</p>

          <div className="hero-latest-btn">
            <div>Trending Collection</div>
            <img src={arrow_icon} alt="Arrow Icon" height="30px" />
          </div>
        </div>

        <div className="hero-right">
          <img src={family} alt="Family" height="400px" />
        </div>
      </div>

      {/* Additional Sections */}
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Basic;
