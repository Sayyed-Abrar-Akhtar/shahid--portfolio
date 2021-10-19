import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';

const HomeScreen = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Projects />
    </section>
  );
};

export default HomeScreen;
