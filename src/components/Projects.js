import React from 'react';
import Project from './Project';

import geodeticmeasurement from '../assets/geodeticmeasurement.jpg';
import Button from './Button';

const Projects = () => {
  return (
    <section className='projects-container'>
      <h1 className='section-heading'>Projects</h1>
      <Project image={geodeticmeasurement} />
      <Project />
      <Project />
      <Button link='/projects' text='View all projects' />
    </section>
  );
};

export default Projects;
