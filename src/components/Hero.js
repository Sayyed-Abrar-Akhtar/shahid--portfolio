import React from 'react';
import { CLIENT_NAME, CLIENT_PROFFESION } from '../constants/clientDetails';
import heroimg from '../assets/heroimg.png';

const Hero = () => {
  return (
    <section className='hero-container'>
      <section className='hero-caption'>
        <h1 className='hero-title'>
          I'm <br /> {CLIENT_NAME}
        </h1>
        <p className='hero-subtitle'>{CLIENT_PROFFESION}</p>
      </section>
      <section className='hero-img'>
        <img src={heroimg} alt='shahid muslim' />
      </section>
    </section>
  );
};

export default Hero;
