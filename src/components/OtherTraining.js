import React from 'react';

const OtherTraining = ({ title, organizedBy, date, center, score }) => {
  return (
    <section className='computer-container'>
      <h3>{title}</h3>
      {organizedBy && organizedBy !== '' && (
        <p className='personal-info'>
          <strong>By:</strong>&nbsp;{organizedBy}
        </p>
      )}
      {date && date !== '' && (
        <p className='personal-info'>
          <strong>Date:</strong>&nbsp;{date}
        </p>
      )}
      {center && center !== '' && (
        <p className='personal-info'>
          <strong>Organized By:</strong>&nbsp;{center}
        </p>
      )}
      {score && score !== '' && (
        <p className='personal-info'>
          <strong>Score:</strong>&nbsp;{score}
        </p>
      )}
    </section>
  );
};

export default OtherTraining;
