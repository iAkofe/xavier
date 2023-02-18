import React from 'react';
import './hero.css';
import {star, frame4, group1} from '../../assets';

const Hero = () => {
  return (
    <div className='xavier__hero'>
      <div className='xavier__hero-container' id='home'>
        <h1>XXII</h1>
        <h3>THE EXHIBITION</h3>
        <ul>
          <li><img src={star} alt='star'/> 1 Brand</li>
          <li><img src={star} alt='star'/> 1 Exhibition</li>
          <li><img src={star} alt='star'/> 60 attendees</li>
        </ul>
      </div>

      <div className='xavier__hero-exhibit'>
        <img className='rotate-center' src={group1}alt='group'/>
      </div>
     
      <div className='xavier__hero-contents'>
        <img src={frame4}alt='exhibition'/>
        <p>Welcome to our upcoming fashion event! We are thrilled to showcase the latest designs and trends from the industry's most talented and up-and-coming designers.</p>
        <button>    Make Reservation    </button>
      </div>


    </div>
  )
};

export default Hero;