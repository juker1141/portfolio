import React from 'react';
import myPhoto from '../assets/img/me.jpg';

const myPhotoStyle = {
  backgroundImage: `url('${myPhoto}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-36 lg:mt-10" >
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <div className="font-Raleway text-5xl lg:text-6xl w-full lg:w-10/12 px-6 lg:px-0 text-left relative">
          <span id="about" className="absolute -top-112 lg:-top-52"></span>About Me
        </div>
        <div className="mt-10 lg:text-xl w-full flex break-words">
          <div className="lg:w-1/12"></div>
          <div className="w-full px-6 lg:px-0">
            I have been self-learning programming for two years and I am proficient in using popular
            <span className="font-bold text-xl font-Raleway px-2">React</span>
            and <span className="font-bold text-xl font-Raleway px-2">Vue</span>
            <br className="sm:hidden" />frameworks and have developed a complete
            <span className="font-bold text-xl font-Raleway pl-2">Fullstack website</span>.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-cneter w-full lg:w-auto lg:ml-48 mb-10 lg:mb-0">
        <div className="h-72 w-72 rounded-full" style={myPhotoStyle} />
      </div>
    </div >
  );
};

export default About;