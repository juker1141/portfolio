import React from 'react';
import bannerImg from '../assets/banner.svg';
import bannerMobileImg from '../assets/banner-mobile.svg';
import github from '../assets/github.svg';
import gear from '../assets/gear.svg';

const bannerImgStyle = {
  backgroundImage: `url('${bannerImg}')`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}
const bannerMobileImgStyle = {
  backgroundImage: `url('${bannerMobileImg}')`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}
const githubImgStyle = {
  backgroundImage: `url('${github}')`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}
const gearImgStyle = {
  backgroundImage: `url('${gear}')`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}

const Banner = () => {

  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div className="lg:h-screen mt-48 lg:mt-0 w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="lg:text-5xl text-center font-Raleway mb-10">
          <div className="text-2xl lg:text-7xl mb-4 lg:mb-0">Hello my name is</div>
          <div className="text-6xl lg:text-8xl font-extrabold lg:inline-block lg:font-black lg:ml-4">Ryu</div>
        </div>
        <div className="flex flex-col justify-center break-words lg:text-xl w-5/6 lg:w-2/3">
          <div>
            Love programming and turn ideas into reality. Curious about every details in computer science. Try different ways to slove problem when facing challenges.</div>
        </div>
      </div>
      <div className="h-96 w-full lg:h-144 lg:w-1/2 relative flex items-center z-0">
        <div className="h-full w-full absolute hidden lg:block" style={bannerImgStyle}>
          <div
            className="absolute animate-bounce lg:bottom-36 lg:right-16 lg:mb-2 lg:w-16 lg:h-16
            xl:bottom-28 xl:right-20 xl:mr-4 xl:mb-4 2xl:bottom-16 2xl:right-16 2xl:mr-7 2xl:h-24 2xl:w-28"
            style={githubImgStyle}
          ></div>
          <div
            className="absolute animate-spin-slow lg:top-44 lg:left-20 lg:h-20 lg:w-20
            xl:top-36 xl:left-24 xl:mt-5 xl:ml-1 2xl:h-28 2xl:w-28 2xl:top-28 2xl:left-28"
            style={gearImgStyle}
          ></div>
          <div
            className="absolute animate-spin-slow lg:top-36 lg:left-10 lg:mt-2 lg:h-16 lg:w-16
            xl:top-32 xl:left-16 2xl:top-24 2xl:left-16 2xl:ml-2 2xl:h-20 2xl:w-20"
            style={gearImgStyle}
          ></div>
        </div>
        <div className="h-full w-full absolute lg:hidden" style={bannerMobileImgStyle}></div>
      </div>
    </div>
  );
};

export default Banner;