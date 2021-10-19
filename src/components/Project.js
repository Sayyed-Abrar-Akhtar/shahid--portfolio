import React from 'react';

const Project = ({
  title = 'Project Title',
  from = '2019',
  to = '2021',
  description = 'Project Description:',
  image,
}) => {
  return (
    <article className='project'>
      <section
        className={
          image ? 'project-details project-details--width' : 'project-details'
        }
      >
        <h3 className='project-title'>{title}</h3>
        <p className='project-duration'>
          {from} - {to}
        </p>
        <p className='project-description'>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At voluptatibus, totam, nam fugit beatae nostrum amet voluptates
          itaque nobis enim optio quo ducimus? Provident optio sapiente
          quibusdam animi ullam odio. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis quam doloribus fuga harum eaque explicabo
          consequatur temporibus. Nostrum beatae asperiores, repellat eaque
          libero illo explicabo error ab voluptatum esse vel. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Sapiente commodi tempore omnis
          incidunt recusandae! Cum commodi repudiandae architecto similique, aut
          consequuntur consectetur modi quos officia sequi, nostrum vitae
          nesciunt harum! lorem ipsum dolor
        </p>
      </section>
      {image && (
        <section className='project-image'>
          <img src={image} alt={title} />
        </section>
      )}
    </article>
  );
};

export default Project;
