import React from 'react';
import Nav from './Nav';
import logo from '../logo.svg';

import LazyLoad from 'react-lazyload';

const Header = () => {
  return (
    <header className='header'>
      <LazyLoad>
        <h1 className='logo'>
          <img src={logo} alt='logo' />
        </h1>
      </LazyLoad>
      <Nav />
    </header>
  );
};

export default Header;
