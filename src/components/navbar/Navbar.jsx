import React from 'react';
import './navbar.css';
import  {xavier, search, shoppingcart, } from '../../assets/';


const navbar = () => (

    <div className='xavier__navbar'>
      <div className='xavier__navbar-container'>
          <a href='#'><img src={xavier} alt='logo'/></a>
          <ul className='xavier__navbar-container_link'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Colections</a></li>
            <li><a href='#'>Event</a></li>
            <li><a href='#'>Schedule</a></li>
          </ul>

          <ul className='xavier__navbar-container_search'>
            <li><img src={search} alt='search'/></li>
            <li><img src={shoppingcart} alt='shoppingcart'/></li>
          </ul>
      </div>
    </div>
  
    );
export default navbar