import React from 'react';
import './newsletter.css';
import {FaArrowRight} from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className='xavier__newsletter'>
      <h2>Subscribe to our emails</h2>
      <p>Be the first to know about new collections and exclusive offers</p>
      <div className='xavier__newsletter-mail'>
        <input type='email' placeholder='Email'/>
        <button type='button'> <FaArrowRight/></button>
      </div>
    </div>
  )
}

export default Newsletter;