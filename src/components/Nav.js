import React from 'react';
import { Link } from 'react-router-dom';

import { menus } from '../data/menuData';

const Nav = () => {
  return (
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
  );
};

export default Nav;
