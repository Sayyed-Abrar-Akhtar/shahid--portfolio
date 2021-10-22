import React from 'react';
import ServiceDetails from '../components/ServiceDetails';
import { services } from '../data/serviceData';

const ServicesScreen = () => {
  return (
    <main className='service-screen'>
      <h1 className='section-heading'>My services</h1>
      {services.map((service, index) => (
        <ServiceDetails
          key={index}
          title={service.service_title}
          description={service.service_description}
          image={service.image}
        />
      ))}
    </main>
  );
};

export default ServicesScreen;
