import React from 'react';
import { Link } from 'react-router-dom';

import { menus } from '../data/menuData';

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-lists'>
          {menus.map((menu, index) => (
            <li id={menu.id} key={index} className='nav-list'>
              <Link to={menu.link} className='nav-link'>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className='nav--mob'>
        <input type='checkbox' id='menu-toggle' className='nav--mob__input' />
        <label htmlFor='menu-toggle' className='nav--mob__label'>
          <span className='hamburger-bar'></span>
        </label>

        <section className='nav__holder'>
          <section className='nav__background'></section>
          <ul className='nav--mob__lists'>
            {menus.map((menu, index) => (
              <li id={menu.id} key={index} className='nav--mob__list nav-list'>
                <a href={menu.link} className='nav-link'>
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Nav;
