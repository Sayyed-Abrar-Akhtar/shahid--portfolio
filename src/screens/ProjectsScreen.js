import React from 'react';

import geodeticmeasurement from '../assets/geodeticmeasurement.jpg';
import Project from '../components/Project';

const ProjectsScreen = () => {
  return (
    <main>
      <h1 className='section-heading'>My Projects</h1>
      <section className='projects-container'>
        <Project image={geodeticmeasurement} />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
    </main>
  );
};

export default ProjectsScreen;
