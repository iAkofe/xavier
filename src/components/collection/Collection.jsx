import React from 'react';
import './collection.css';
import {frame23, frame231, frame24, frame241, frame25, frame251} from '../../assets'

const Collection = () => {
  return (
    <div className='xavier__collection'>
      <div className='xavier__collection-link'>
        <h2>Our Collection</h2> 
        <a>View All</a>
      </div>
      <div className='xavier__collection-grid'>
        <div> 
          <img src={frame23} alt='collection' />
          <p className='xavier__collection-grid_item'>Black Leather Jacket</p>
          <p className='xavier__collection-grid_price'> R 1,000.00 ZAR </p>
        </div>
        <div> 
          <img src={frame24} alt='collection' />
          <p className='xavier__collection-grid_item'>Zara Women Shirt</p>
          <p className='xavier__collection-grid_price'> R 2,200.00 ZAR </p>
        </div>
        <div> 
          <img src={frame25} alt='collection' />
          <p className='xavier__collection-grid_item'>Black Suit</p>
          <p className='xavier__collection-grid_price'> R 3,000.00 ZAR </p>
        </div>
        <div> 
          <img src={frame231} alt='collection' /> 
          <p className='xavier__collection-grid_item'>Green Dress</p>
          <p className='xavier__collection-grid_price'> R 1,200.00 ZAR </p>
        </div>
        <div> 
          <img src={frame241} alt='collection' />
          <p className='xavier__collection-grid_item'>Female Suit</p>
          <p className='xavier__collection-grid_price'> R 1,700.00 ZAR </p>
          </div>
        <div> 
          <img src={frame251} alt='collection' />
          <p className='xavier__collection-grid_item'>Blue 2-piece</p>
          <p className='xavier__collection-grid_price'> R 1,900.00 ZAR </p>
        </div>
      </div>
    </div>
  )
};

export default Collection;