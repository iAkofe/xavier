import React from 'react';
import './footer.css';
import {xavierFooter} from '../../assets'

const Footer = () => {
  return (
    <div className='xavier__footer'>
      <div className='xavier__footer-links'>
        <div className='xavier__footer-links_div'>
          <h3> Quick links </h3>
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>Event</li>
            <li>Schedule</li>
          </ul>
        </div>

        <div className='xavier__footer-links_div'>
          <h3> Services </h3>
          <ul>
            <li>Men Clothing</li>
            <li>Women Clothing</li>
            <li>Accessories</li>
            <li>Promo</li>
          </ul>
        </div>

        <div className='xavier__footer-links_div'>
          <h3> Social Media </h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <img src={xavierFooter} alt='' />
    </div>
  )
}

export default Footer;
