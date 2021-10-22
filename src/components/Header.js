import React from 'react';
import Nav from './Nav';
import logo from '../logo.svg';

import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <LazyLoad>
        <Link to='/'>
          <h1 className='logo'>
            <img src={logo} alt='logo' />
          </h1>
        </Link>
      </LazyLoad>
      <Nav />
    </header>
  );
};

export default Header;
