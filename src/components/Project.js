import React from 'react';

const Project = ({
  consultant = 'Project Title',
  position = 'Position',
  from = '2019',
  to = '2021',
  projects = 'projects',
  responsibilities = 'Project Description:',
  image,
}) => {
  return (
    <article className='project'>
      <section
        className={
          image ? 'project-details project-details--width' : 'project-details'
        }
      >
        <h3 className='project-title'>{consultant}</h3>
        <h3 className='project-title'>{position}</h3>
        <p className='project-duration'>
          {from} - {to}
        </p>
        <p className='project-description'>
          <b>Projects: </b>
          <br />
          {projects}
        </p>
        <p className='project-description'>
          <b>Responsibilities: </b>
          <br />
          {responsibilities}
        </p>
      </section>
      {image && (
        <section className='project-image'>
          <img src={image} alt={consultant} />
        </section>
      )}
    </article>
  );
};

export default Project;
