import React from 'react';

// const reactImgStyle = {

//   backgroundImage: `url('${ReactWorkImg}')`,
//   backgroundPosition: 'top',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// }

const Works = () => {
  return (
    <div className="w-full flex flex-col items-cneter mt-32">
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <div className="font-Raleway text-5xl lg:text-6xl w-full lg:w-10/12 px-6 lg:px-0 text-left relative">
          <span id="work" className="absolute -top-112 lg:-top-52"></span>
          My Works
        </div>
        <div className="mt-10 lg:text-xl w-full lg:w-10/12 px-6 lg:px-0 flex break-words">
          Here are a few projects I've worked on recently.
        </div>
      </div>
      <ul className="mt-24 w-full px-3 lg:px-0 flex flex-col items-center">
        <li className="w-full lg:w-11/12 xl:10/12 flex flex-col lg:flex-row
          justify-center items-center mb-16">
          <div className="w-full sm:w-5/6 px-3 xl:w-7/12">
            <div className="w-full h-52 sm:h-80 lg:h-96 rounded-lg bg-storesImg
            bg-top bg-no-repeat bg-cover"></div>
          </div>
          <div className="w-full lg:w-5/12 p-10 px-6 lg:px-10 xl:px-16">
            <div className="text-4xl mb-6 font-bold flex justify-between items-end">
              Hardware Store
              <a
                href="https://github.com/juker1141/js_finialhw_Store"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github-square text-3xl"></i>
              </a>
            </div>
            <div className="mb-3">Hardware Store is an ecommerce websites work.</div>
            <div>I developing this websites at my last job, because I was working in a hardware store then. That's why I can develop this websites from the point of the users. It has a complete CMS that you can check all products and orderat at any time.</div>
          </div>
        </li>
        <li className="w-full lg:w-11/12 xl:10/12 flex flex-col lg:flex-row-reverse justify-center items-center mb-16">
          <div className="w-5/6 xl:w-7/12">
            <div className="w-full h-52 sm:h-80 lg:h-96 rounded-lg bg-emailyImg
            bg-top bg-no-repeat bg-cover"></div>
          </div>
          <div className="w-full lg:w-5/12 p-10 px-6 lg:px-10 xl:px-16">
            <div className="text-4xl mb-6 font-bold flex justify-between items-end">
              Emaily
              <a
                href="https://github.com/juker1141/Emaily"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github-square text-3xl"></i>
              </a>
            </div>
            <div className="mb-3">Emaily is a app that can send email survey to your users and collect their feedback.</div>
            <div>In front-end, I build with React and Redux.</div>
            <div>And use express and mongoDB to build database server.</div>
          </div>
        </li>
        <li className="w-full lg:w-11/12 xl:10/12 flex flex-col lg:flex-row
          justify-center items-center">
          <div className="w-full sm:w-5/6 px-3 xl:w-7/12">
            <div className="w-full h-52 sm:h-80 lg:h-96 rounded-lg bg-maskMapImg
            bg-top bg-no-repeat bg-cover"></div>
          </div>
          <div className="w-full lg:w-5/12 p-10 px-6 lg:px-10 xl:px-16">
            <div className="text-4xl mb-6 font-bold flex justify-between items-end">
              Mask Map
              <a
                href="https://github.com/juker1141/maskMap"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github-square text-3xl"></i>
              </a>
            </div>
            <div className="mb-3">Mask Map could find masks close to your homes or work,</div>
            <div>when people built maskmap in Taiwan, they usually use OSM and leaflet.
              But I want to try the google map, becsuse its UI and Maps are interesting.</div>
            <div>In this time, I've learned a lot of google map.</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Works;