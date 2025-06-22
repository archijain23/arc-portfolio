
import React from 'react';
import Header from '../components/Header';
import Hero3D from '../components/Hero3D';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import ScrollBasketball from '../components/ScrollBasketball';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollBasketball />
      <Hero3D />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
