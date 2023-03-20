import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <div className='banner-container'>
      <a href='/'>
        <img
          className='banner-img'
          src='https://iili.io/HhzQVet.jpg'
          alt='banner'
        />
      </a>
    </div>
  );
}
