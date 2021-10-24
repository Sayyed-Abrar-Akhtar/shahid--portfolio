import React from 'react';
import Card from './Card';

import { services } from '../data/serviceData';
import Button from './Button';

const Services = () => {
  return (
    <section className='services-container'>
      <h1 className='section-heading'>Services</h1>
      <section className='card-holder'>
        {services.map(
          (service, index) =>
            index < 3 && (
              <Card
                key={index}
                title={service.service_title}
                desc={service.service_description}
                image={service.image}
              />
            )
        )}
      </section>
      <Button link='/services' text='Read in detail..' />
    </section>
  );
};

export default Services;
