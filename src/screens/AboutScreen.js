import React from 'react';
import Computer from '../components/Computer';
import Education from '../components/Education';
import OtherTraining from '../components/OtherTraining';
import { trainings } from '../data/computerTrainingData';

import { educations } from '../data/educationData';
import { otherActivities } from '../data/otherActivitiesData';
import { othertrainings } from '../data/otherTrainingData';

const AboutScreen = () => {
  return (
    <main>
      <h1 className='section-heading'>About Me</h1>
      <section className='about-container'>
        <section className='personal-info-container'>
          <h2 className='name'>Shahid Muslim</h2>
          <h3 className='profession'>Geologist</h3>
          <p className='personal-info address'>
            <strong>&nbsp;Address:&nbsp;</strong>
            Yapikhya Marg-54, Dhobichaur, Chhetrapati, Kathmandu-17, Nepal
          </p>
          <p className='personal-info citizenship-id'>
            <strong>&nbsp;Citizenship ID:&nbsp;</strong>45670 (Nepali)
          </p>
          <p className='personal-info passport-id'>
            <strong>&nbsp;Passport ID:&nbsp;</strong>06748101
          </p>
          <p className='personal-info license-id'>
            <strong>&nbsp;Driving L.N:&nbsp;</strong>010600125560 (A)
          </p>
          <p className='personal-info pan'>
            <strong>&nbsp;PAN:&nbsp;</strong>111820186
          </p>
          <p className='personal-info mobile'>
            <strong>&nbsp;Mobile:&nbsp;</strong>+977-9841756550
          </p>
        </section>
        <section className='education-info-container'>
          <h2 className='name heading--bg'>Education</h2>

          {educations.map((item, index) =>
            item.thesis ? (
              <Education
                key={index}
                major={item.major}
                university={item.university}
                college={item.college}
                year={item.year}
                score={item.score}
                thesis={item.thesis}
              />
            ) : (
              <Education
                key={index}
                major={item.major}
                university={item.university}
                college={item.college}
                year={item.year}
                score={item.score}
              />
            )
          )}
        </section>
        <section className='training-skills-container'>
          <h2 className='computer heading--bg'>
            Computer Trainings and Knowledge
          </h2>
          {trainings.map((training, index) => (
            <Computer
              title={training.title ? training.title : ''}
              date={training.date ? training.date : ''}
              center={training.center ? training.center : ''}
              skills={training.skills ? training.skills : ''}
              score={training.score ? training.score : ''}
              key={index}
            />
          ))}
        </section>
        <section className='training-skills-container'>
          <h2 className='other heading--bg'>Other Trainings Attended</h2>
          {othertrainings.map((training, index) => (
            <OtherTraining
              title={training.title ? training.title : ''}
              organizedBy={training.organized_by ? training.organized_by : ''}
              date={training.date ? training.date : ''}
              center={training.center ? training.center : ''}
              skills={training.skills ? training.skills : ''}
              score={training.score ? training.score : ''}
              key={index}
            />
          ))}
        </section>
        <section className='professional-social-activities-container'>
          <h2 className='heading--bg'>Proffesional and social activites</h2>
          <ul className='other-activities'>
            {otherActivities.map((item, index) => (
              <li key={index} className='other-activities-list'>
                <span>&#8594;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default AboutScreen;
