import React from 'react';

import gpi from '../assets/gpi.jpg';
import Project from '../components/Project';

const ProjectsScreen = () => {
  return (
    <main>
      <h1 className='section-heading'>My Projects</h1>
      <section className='projects-container'>
        <Project image={gpi} />
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
