import React from 'react';

const Card = ({ title = 'Card title', desc = 'Card description', image }) => {
  return (
    <article className='card'>
      <h2
        className='card-title'
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.52), rgba(255, 255, 107, 0.5)), url(${image})`,
        }}
      >
        {title}
      </h2>
      <p className='card-description'>{desc}</p>
    </article>
  );
};

export default Card;
