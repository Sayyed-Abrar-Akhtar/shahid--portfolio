import React from 'react';

const Card = ({ title = 'Card title', desc = 'Card description', image }) => {
  // const reduceDescription = (description) => {
  //   let desc = '';
  //   const smallDesc = description.replaceAll(' ', '+');
  //   console.log(smallDesc);
  //   const descArray = smallDesc.toString().split('');
  //   console.log(descArray);
  //   descArray.forEach((letter, index) => {
  //     if (index < 200) {
  //       desc += letter;
  //       console.log(desc);
  //     }
  //   });
  //   desc = desc.replaceAll('+', ' ');
  //   desc = desc.concat('', '...');
  //   return desc;
  // };

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
      <ul className='card-lists'>
        {/* {desc.length < 200 ? desc : reduceDescription(desc)} */}
        {desc.map((item, index) => (
          <li className='card-list' key={index}>
            <span>&#9656;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Card;
