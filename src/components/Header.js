import React from 'react';
import Nav from './Nav';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>
        <img src={logo} alt='logo' />
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
