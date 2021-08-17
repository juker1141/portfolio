import React from 'react';

class Header extends React.Component {
  state = ({
    sayhelloHover: false,
    menuShow: false,
  });

  render() {
    return (
      <div className={`font-BarlowCondensed bg-lightBlue z-10 fixed top-0 right-0 left-0 mx-2 mt-2 lg:mt-5 pt-6 lg:mx-5 lg:pt-7 pb-5 lg:pb-12 px-5 lg:px-20 ${this.state.menuShow ? 'h-screen lg:h-auto' : ''}`}>
        <div className="flex justify-between">
          <div className="flex items-center lg:items-end justify-between lg:justify-start w-full lg:w-auto">
            <div className="font-Caveat text-5xl lg:text-6xl">Ryu</div>
          </div>
          <button
            onClick={() => { this.setState({ menuShow: !this.state.menuShow }) }}
            type="button"
            className="flex justify-center items-center lg:hidden"
          >
            <span className="material-icons p-2 text-3xl">
              menu
            </span>
          </button>
          <div className={`text-4xl lg:text-3xl lg:flex lg:items-end top-32 lg:top-0
          ${this.state.menuShow ? 'fixed lg:relative' : 'hidden'}`}>
            <ul className="lg:flex lg:items-center">
              <li className="py-3 lg:hidden">
                <ul className="flex w-full px-2">
                  <li className="mr-2 flex items-center">
                    <a
                      href="https://www.linkedin.com/in/chih-lung-tu-a6807821a/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center m-2"
                    >
                      <i className="fab fa-linkedin text-3xl"></i>
                    </a>
                  </li>
                  <li className="mr-2 flex items-center">
                    <a href="https://github.com/juker1141"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center m-2"
                    >
                      <i className="fab fa-github-square text-3xl"></i>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="mailto:juker1141@gmail.com"
                      className="flex items-center m-2"
                    >
                      <i className="fas fa-envelope-square text-3xl"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="py-3 lg:py-0">
                <a
                  onClick={() => { this.setState({ menuShow: false }) }}
                  href="#about"
                  className="px-3 lg:px-6 hover:tracking-wide lg:hover:border-b-2 lg:hover:pb-2"
                >
                  About
                </a>
              </li>
              <li className="py-3 lg:py-0">
                <a
                  onClick={() => { this.setState({ menuShow: false }) }}
                  href="#works"
                  className="px-3 lg:px-6 hover:tracking-wide lg:hover:border-b-2 lg:hover:pb-3"
                >
                  Works
                </a>
              </li>
              <li className="py-3 lg:py-0">
                <a
                  onClick={() => { this.setState({ menuShow: false }) }}
                  href="#contact"
                  onMouseOver={() => { setTimeout((() => { this.setState({ sayhelloHover: true }) }), 200) }}
                  onMouseOut={() => { this.setState({ sayhelloHover: false }) }}
                  className="lg:flex justify-between items-end transition-all delay-200 hover:tracking-wide focus:outline-none px-3 py-3 lg:py-0 lg:px-6"
                >
                  Contact
                  <i className={`far ${this.state.sayhelloHover ? 'fa-comment-dots' : 'fa-comment'} ml-2`}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  };
};

export default Header;