import React from 'react';
import { CLIENT_NAME, CLIENT_PROFFESION } from '../constants/clientDetails';
import heroimg from '../assets/heroimg.png';

import { SiGoogleearth } from 'react-icons/si';

import LazyLoad from 'react-lazyload';

const Hero = () => {
  return (
    <section className='hero-container'>
      <section className='hero-caption'>
        <h1 className='hero-title'>
          I'm <br /> {CLIENT_NAME}
        </h1>
        <p className='hero-subtitle'>
          <span className='subtitle'>{CLIENT_PROFFESION} </span>
          <span className='icon icon--earth'>
            <SiGoogleearth />
          </span>
        </p>
      </section>
      <LazyLoad className='hero-img' placeholder='fadein'>
        <img src={heroimg} alt='shahid muslim' />
      </LazyLoad>
    </section>
  );
};

export default Hero;
