import React from 'react';

const ServiceDetails = ({ image, title, description }) => {
  return (
    <section className='service-details-container'>
      <section className='service-image-container'>
        <img src={image} alt={title} className='service-image' />
      </section>
      <section className='service-details'>
        <h3 className='service-title'>{title}</h3>
        <p className='service-description'>{description}</p>
      </section>
    </section>
  );
};

export default ServiceDetails;
