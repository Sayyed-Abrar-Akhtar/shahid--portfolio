import React from 'react';

const Computer = ({ title, date, center, skills, score }) => {
  return (
    <section className='computer-container'>
      <h3>{title}</h3>
      {date && date !== '' && (
        <p className='personal-info'>
          <strong>Date:</strong>&nbsp;{date}
        </p>
      )}
      {center && center !== '' && (
        <p className='personal-info'>
          <strong>Training center:</strong>&nbsp;{center}
        </p>
      )}
      {score && score !== '' && (
        <p className='personal-info'>
          <strong>Score:</strong>&nbsp;{score}
        </p>
      )}
      {skills && skills !== '' && (
        <>
          <p className='personal-info'>
            <strong>Skills Gained:</strong>&nbsp;
          </p>
          <div className='skills-container'>
            {skills.map((skill, index) => (
              <span className='skill' key={index}>
                {skill}
              </span>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Computer;
