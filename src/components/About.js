import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <div className="py-24">
      <div className="bg-violet-700 h-96">
        <div className="container mx-auto flex flex-col items-center pt-32 pb-20 text-white">
          <div className="text-3xl mb-5">Hi, I'm Ryu</div>
          <div>我自學程式已有兩年，能熟練使用 React、 Vue 熱門框架，並開發過一個完整的前後端網站</div>
        </div>
        <Skills />
      </div>
    </div>
  )
};

export default About;