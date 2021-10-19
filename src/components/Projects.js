import React from 'react';
import Project from './Project';

import geodeticmeasurement from '../assets/geodeticmeasurement.jpg';

const Projects = () => {
  return (
    <section className='projects-container'>
      <h1 className='section-heading'>Projects</h1>
      <Project image={geodeticmeasurement} />
      <Project />
      <Project />
    </section>
  );
};

export default Projects;
