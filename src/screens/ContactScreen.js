import React from 'react';
import { FaViber, FaWhatsapp, FaMobileAlt, FaLinkedin } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

import user from '../assets/user.png';

const ContactScreen = () => {
  return (
    <main>
      <h1 className='section-heading'>Contact Me</h1>
      <section className='contact-container'>
        <section className='contact-detail-holder'>
          <h2>Shahid Muslim (Geologist)</h2>
          <p>
            <strong>
              <FaMobileAlt className='contact-icon icon--phone' />
              &nbsp;Phone:&nbsp;
            </strong>
            <a href='tel:+977-9841756550'>+977-9841756550</a>
          </p>
          <p>
            <strong>
              <FaWhatsapp className='contact-icon icon--whatsapp' />
              &nbsp;Whatsapp:&nbsp;
            </strong>
            <a href='tel:+977-9841756550'>+977-9841756550</a>
          </p>
          <p>
            <strong>
              <FaViber className='contact-icon icon--viber' />
              &nbsp;Viber:&nbsp;
            </strong>
            <a href='tel:+977-9841756550'>+977-9841756550</a>
          </p>
          <p>
            <strong>
              <GoMail className='contact-icon icon--mail' />
              &nbsp;Gmail :&nbsp;
            </strong>
            <a href='mailto:shd.m20@gmail.com'>shd.m20@gmail.com</a>
          </p>
          <p>
            <strong>
              <FaLinkedin className='contact-icon icon--linkedin' />
              &nbsp;Linkedin:&nbsp;
            </strong>
            <a href='https://np.linkedin.com/in/shahid-muslim-b18a4044'>
              shahid-muslim-b18a4044
            </a>
          </p>
        </section>
        <section className='image-holder'>
          <section className='image-background'></section>
          <section className='image'>
            <img src={user} alt='' className='contact-image' />
          </section>
        </section>
      </section>
    </main>
  );
};

export default ContactScreen;
