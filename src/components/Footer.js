import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; Shahid Muslim. {new Date().getFullYear()}</p>
      <p>All rights reserved.</p>
      <p>
        Designed and Developed by{' '}
        <a
          href='https://www.sayyedabrarakhtar.com.np'
          target='_blank'
          className='designer'
        >
          Sayyed Abrar Akhtar
        </a>
      </p>
    </footer>
  );
};

export default Footer;
