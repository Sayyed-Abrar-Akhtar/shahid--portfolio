import React from 'react';
import Project from './Project';

import Button from './Button';
import { projects } from '../data/projectData';

const Projects = () => {
  return (
    <section className='projects-container'>
      <h1 className='section-heading'>Experiences</h1>
      {projects.map(
        (i, idx) =>
          idx <= 2 && (
            <Project
              key={idx}
              consultant={i.consultant}
              position={i.position}
              from={i.from}
              to={i.to}
              projects={i.projects}
              responsibilities={i.responsibilities}
            />
          )
      )}

      <Button link='/experiences' text='View all projects' />
    </section>
  );
};

export default Projects;
