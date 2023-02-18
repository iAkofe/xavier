import React from 'react';
import './slider.css';
import { RxDotFilled } from 'react-icons/rx';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image';

const slides =[
  {
    url: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    caption: 'first slide'
  },

  {
    url: 'https://images.pexels.com/photos/247298/pexels-photo-247298.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'second slide'
  },

  {
    url: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'third slide'
  },

  {
    url: 'https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'fourth slide'
  },
]

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '35vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
}


export default function Slider() {
  return (
    <div className='slide-container xavier__slider'>
      <Slide>
        {slides.map((image, index) =>(
          <div key={index}>
            <div className='xavier__slider-slide' style={{...divStyle, backgroundImage:`url(${image.url})`}}>
            </div>
          </div>
        ))}

      </Slide>
    </div>

    
  )
}
