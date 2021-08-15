import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-lightBlue pb-8 lg:pb-16 lg:px-24">
      <hr className="mx-8 lg:mx-24 border" />
      <div className="font-Caveat text-5xl lg:text-6xl text-center pt-8 lg:pt-12 pr-3 mb-6">Ryu</div>
      <ul className="flex justify-center w-full mb-6">
        <li className="mr-5">
          <a href="#">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </li>
        <li className="mr-5">
          <a href="https://github.com/juker1141"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-github-square text-2xl"></i>
          </a>
        </li>
        <li>
          <a href="mailto:juker1141@gmail.com">
            <i className="fas fa-envelope-square text-2xl"></i>
          </a>
        </li>
      </ul>
      <div className="flex justify-center">
        <a href="https://tailwindcss.com/">
          <span className="text-xs">Made with </span>
          <span className="text-sm font-black">tailwindcss</span>
        </a>
      </div>
    </div>
  )
}

export default Footer;