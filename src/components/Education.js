import React from 'react';

const Education = ({ major, university, college, year, score, thesis }) => {
  return (
    <section className='education-container'>
      {major && <h3>{major}</h3>}
      {university && (
        <p className='personal-info'>
          <strong>University/Board:</strong>&nbsp;{university}
        </p>
      )}
      {college && (
        <p className='personal-info'>
          <strong>College/School:</strong>&nbsp;{college}
        </p>
      )}
      {year && (
        <p className='personal-info'>
          <strong>Year:</strong>&nbsp;{year}
        </p>
      )}
      {score && (
        <p className='personal-info'>
          <strong>Score:</strong>&nbsp;{score}
        </p>
      )}
      {thesis && (
        <p className='personal-info'>
          <strong>Thesis:</strong>&nbsp;{thesis}
        </p>
      )}
    </section>
  );
};

export default Education;
