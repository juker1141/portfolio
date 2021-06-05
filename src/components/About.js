import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <div>
      <div className="h-auto">
        <div className="container mx-auto flex flex-col items-center pt-20 pb-20 font-bold">
          <div className="text-5xl mb-10">About Ryu</div>
          <div className="text-xl">我自學程式已有兩年，能熟練使用 React、 Vue 熱門框架，並開發過一個完整的前後端網站</div>
        </div>
        <Skills />
      </div>
    </div>
  )
};

export default About;