import React from 'react';
import Card from './Card';

import { services } from '../data/serviceData';

const Services = () => {
  return (
    <section className='services-container'>
      <h1 className='section-heading'>Services</h1>
      <section className='card-holder'>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.service_title}
            desc={service.service_description}
            image={service.image}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;
