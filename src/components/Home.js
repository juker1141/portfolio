import React from 'react';

import Banner from './Banner';
import About from './About';
import Works from './Works';
import Contact from './contacts/Contact';

const Home = () => {
  return (
    <div className="h-full bg-lightBlue pb-8 lg:pb-16">
      <div className="container mx-auto flex flex-col items-center relative">
        <Banner />
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default Home;