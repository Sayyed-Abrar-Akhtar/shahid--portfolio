import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';

const HomeScreen = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
    </main>
  );
};

export default HomeScreen;
