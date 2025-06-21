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
      <div className="hero-section">
        <div className="hero-left">
          <h3 className='hero-left h2'>Blockbuster Deals!</h3>
          <h3 className='hero-left h2'>Best Prices!</h3>
          <div className="hero-hand-icon">
            <i className="bi bi-arrow-right-circle"></i>
          </div>
          <p className='hero-left h2'>New Collections For Everyone....</p>
          <div className="hero-latest-btn">
            <div className='hero-p'>Trending Collection</div>
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
