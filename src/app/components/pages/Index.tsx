// pages/index.tsx

import { NextPage } from 'next'; 
import Layout from '../layout/Layout';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Projects from '../sections/Projects';
import Hobbies from '../sections/Hobbies'; 
import WhyMe from '../sections/WhyMe'; 
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

// Componente principal de la página
const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Hobbies />
      <WhyMe />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;