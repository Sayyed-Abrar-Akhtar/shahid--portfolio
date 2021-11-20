import React from 'react';

import Project from '../components/Project';
import { projects } from '../data/projectData';

const ProjectsScreen = () => {
  return (
    <main>
      <h1 className='section-heading'>Experiences</h1>
      <section className='projects-container'>
        {projects.map((i, idx) => (
          <Project
            key={idx}
            consultant={i.consultant}
            position={i.position}
            from={i.from}
            to={i.to}
            projects={i.projects}
            responsibilities={i.responsibilities}
          />
        ))}
      </section>
    </main>
  );
};

export default ProjectsScreen;
