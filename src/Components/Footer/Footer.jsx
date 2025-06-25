import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.avif"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
import About from '../../Pages/FooterPages/About'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" height="40px" />
            <p>N Mart</p>
        </div>
        <ul className='footer-links'>
          <li><Link to="/about" className="footer-link">About</Link></li>
          <li><Link to="/products" className="footer-link">Products</Link></li>
          <li><Link to="/contact" className="footer-link">Contact</Link></li>
        </ul>
        <div className='footer-social-icon'>
        <div className="footer-icon-container">
        <img src={instagram_icon} alt="" height="30px" />
        </div>
        <div className="footer-icon-container">
        <img src={facebook_icon} alt="" height="30px"  />
        </div>
        <div className="footer-icon-container">
        <img src={whatsapp_icon} alt=""  height="30px" />
        </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer