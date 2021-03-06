import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const Works = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-cneter mt-32">
      <div className="flex flex-col items-start w-full md:px-24 lg:px-16">
        <div className="font-Raleway text-5xl lg:text-6xl w-full lg:w-10/12 px-6 lg:px-0 text-left relative">
          <span id="works" className="absolute -top-36 lg:-top-52"></span>
          My Works
        </div>
        <div className="mt-10 lg:text-xl w-full lg:w-10/12 px-6 lg:px-0 flex break-words">
          {t('works.description.title')}
        </div>
      </div>
      <ul className="mt-16 lg:mt-24 w-full px-3 lg:px-0 flex flex-col items-center">
        <li className="w-full lg:w-11/12 xl:10/12 flex flex-col lg:flex-row
          justify-center items-center mb-8 lg:mb-16">
          <div className="w-full sm:w-5/6 lg:w-1/2">
            <div className="w-full h-52 sm:h-72 lg:h-96 rounded-lg bg-storesImg_sm lg:bg-storesImg_lg_1
            lg:hover:bg-storesImg_lg_2 transition-all duration-500 bg-top bg-no-repeat bg-cover flex items-center justify-center">
              <div className="font-Orbitron text-white text-2xl md:text-4xl py-3 md:py-6 px-6 bg-primary bg-opacity-60
              rounded-lg lg:hidden">
                Hardware Store
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 p-10 px-3 sm:px-24 lg:px-10 xl:px-16">
            <div className="text-3xl mb-6 font-bold flex justify-between items-end">
              Hardware Store
              <a
                href="https://github.com/juker1141/js_finialhw_Store"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github-square text-3xl"></i>
              </a>
            </div>
            <ul className="mb-2 flex text-white text-xs font-bold">
              <li className="px-2 bg-green-500 rounded-lg mr-2">Vue</li>
              <li className="px-2 bg-green-500 rounded-lg mr-2">Vuex</li>
              <li className="px-2 bg-purple-600 rounded-lg">BS4</li>
            </ul>
            <div className='mb-3'>
              <strong>Hardware Store</strong>
              <Trans>
                {t('works.description.stores.header')}
              </Trans>
            </div>
            <Trans>
              {t('works.description.stores.content')}
            </Trans>
            <div className="flex justify-end mt-8">
              <a
                href="https://juker1141.github.io/js_finialhw_Store/#/home"
                target="_blank"
                rel="noreferrer noopener"
                className="relative rounded-lg overflow-hidden py-2 px-4 group hidden lg:block"
              >
                <span className="absolute w-52 h-52 transform -rotate-45 group-hover:-top-14 group-hover:-left-8 transition-all ease-linear duration-300 bg-blue-900 left-36 top-14"></span>
                <span className="relative font-RobotoCondensed text-base lg:text-xl group-hover:text-white duration-300 flex items-center">
                  <span className="absolute w-full bottom-0 border-b-2 border-blue-900 duration-300"></span>
                  {t('works.visitbutton')}
                  <span className="material-icons text-xl ml-1">
                    launch
                  </span>
                </span>
              </a>
              <a
                href="https://juker1141.github.io/js_finialhw_Store/#/home"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg py-2 px-4 hover:text-white hover:bg-blue-900 group lg:hidden
                transition-all duration-300"
              >
                <span className="relative font-RobotoCondensed text-base lg:text-xl flex items-center
                ">
                  <span className="absolute w-full bottom-0 border-b-2 border-blue-900 duration-150"></span>
                  {t('works.visitbutton')}
                  <span className="material-icons text-xl ml-1">
                    launch
                  </span>
                </span>
              </a>
            </div>
          </div>
        </li>
        <li className="w-full lg:w-11/12 xl:10/12 flex flex-col lg:flex-row-reverse justify-center items-center mb-8 lg:mb-16">
          <div className="w-full sm:w-5/6 lg:w-1/2">
            <div className="w-full h-52 sm:h-72 lg:h-96 rounded-lg bg-emailyImg_sm lg:bg-emailyImg_lg_1
            lg:hover:bg-emailyImg_lg_2 transition-all duration-500 bg-top bg-no-repeat bg-cover flex items-center justify-center">
              <div className="font-FugazOne text-white text-2xl md:text-4xl py-3 md:py-6 px-6 bg-primary bg-opacity-60
              rounded-lg lg:hidden">
                <i className="fas fa-paper-plane mr-3"></i>
                Emaily
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 p-10 px-3 sm:px-24 lg:px-10 xl:px-16">
            <div className="text-3xl mb-6 font-bold flex justify-between items-end">
              Emaily
              <a
                href="https://github.com/juker1141/Emaily"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github-square text-3xl"></i>
              </a>
            </div>
            <ul className="mb-2 flex text-white text-xs font-bold">
              <li className="px-2 bg-blue-600 rounded-lg mr-2">React</li>
              <li className="px-2 bg-purple-600 rounded-lg mr-2">Redux</li>
              <li className="px-2 bg-primary rounded-lg mr-2">Express</li>
              <li className="px-2 bg-green-500 rounded-lg">MongoDB</li>
            </ul>
            <div className="mb-3"><span className="font-bold">Emaily</span> {t('works.description.emaily.header')}</div>
            <Trans>
              {t('works.description.emaily.content')}
            </Trans>
            <div className="flex justify-end mt-8">
              <a
                href="https://vast-retreat-86807.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="relative rounded-lg overflow-hidden py-2 px-4 group hidden lg:block"
              >
                <span className="absolute w-52 h-52 transform -rotate-45 group-hover:-top-14 group-hover:-left-8 transition-all ease-linear duration-300 bg-blue-900 left-36 top-14"></span>
                <span className="relative font-RobotoCondensed text-base lg:text-xl group-hover:text-white duration-300 flex items-center">
                  <span className="absolute w-full bottom-0 border-b-2 border-blue-900 duration-300"></span>
                  {t('works.visitbutton')}
                  <span className="material-icons text-xl ml-1">
                    launch
                  </span>
                </span>
              </a>
              <a
                href="https://vast-retreat-86807.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg py-2 px-4 hover:text-white hover:bg-blue-900 group lg:hidden
                transition-all duration-300"
              >
                <span className="relative font-RobotoCondensed text-base lg:text-xl flex items-center
                ">
                  <span className="absolute w-full bottom-0 border-b-2 border-blue-900 duration-150"></span>
                  {t('works.visitbutton')}
                  <span className="material-icons text-xl ml-1">
                    launch
                  </span>
                </span>
              </a>
            </div>
          </div>
        </li>
        <li className="w-full lg:w-11/12 xl:10/12 flex flex-col lg:flex-row
          justify-center items-center">
          <div className="w-full sm:w-5/6 lg:w-1/2">
            <div className="w-full h-52 sm:h-72 lg:h-96 rounded-lg bg-maskMapImg_sm lg:bg-maskMapImg_lg_1
            lg:hover:bg-maskMapImg_lg_2 transition-all duration-500 bg-left bg-no-repeat bg-cover flex items-center justify-center">
              <div className="font-FjallaOne text-white text-2xl md:text-4xl py-3 md:py-6 px-6 bg-primary bg-opacity-60
              rounded-lg lg:hidden flex items-center">
                <span className="material-icons-outlined mr-3 text-5xl md:text-6xl">
                  masks
                </span>
                Mask Map
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 p-10 px-3 sm:px-24 lg:px-10 xl:px-16">
            <div className="text-3xl mb-6 font-bold flex justify-between items-end">
              Mask Map
              <a
                href="https://github.com/juker1141/maskMap"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github-square text-3xl"></i>
              </a>
            </div>
            <ul className="mb-2 flex text-white text-xs font-bold">
              <li className="px-2 bg-blue-600 rounded-lg mr-2">React</li>
              <li className="px-2 bg-purple-600 rounded-lg mr-2">Redux</li>
              <li className="px-2 bg-red-600 rounded-lg">Google Maps API </li>
            </ul>
            <div className="mb-3"><span className="font-bold">Mask Map</span> {t('works.description.maskmap.header')}</div>
            <Trans>
              {t('works.description.maskmap.content')}
            </Trans>
            <div className="flex justify-end mt-8">
              <a
                href="https://search-mask-21314.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="relative rounded-lg overflow-hidden py-2 px-4 group hidden lg:block"
              >
                <span className="absolute w-52 h-52 transform -rotate-45 group-hover:-top-14 group-hover:-left-8 transition-all ease-linear duration-300 bg-blue-900 left-36 top-14"></span>
                <span className="relative font-RobotoCondensed text-base lg:text-xl group-hover:text-white duration-300 flex items-center">
                  <span className="absolute w-full bottom-0 border-b-2 border-blue-900 duration-300"></span>
                  {t('works.visitbutton')}
                  <span className="material-icons text-xl ml-1">
                    launch
                  </span>
                </span>
              </a>
              <a
                href="https://search-mask-21314.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg py-2 px-4 hover:text-white hover:bg-blue-900 group lg:hidden
                transition-all duration-300"
              >
                <span className="relative font-RobotoCondensed text-base lg:text-xl flex items-center
                ">
                  <span className="absolute w-full bottom-0 border-b-2 border-blue-900 duration-150"></span>
                  {t('works.visitbutton')}
                  <span className="material-icons text-xl ml-1">
                    launch
                  </span>
                </span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Works;