import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, text }) => {
  return (
    <section className='btn'>
      <Link to={link}> {text}</Link>
    </section>
  );
};

export default Button;
