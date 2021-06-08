import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = ({
    menuHover: false,
    sayhelloHover: false,
  });

  renderMenuButton = () => {
    const path = window.location.pathname; // 獲得當前路徑
    if (path.endsWith('/menu')) {
      return (
        <Link
          to="/"
          className="text-3xl"
        >
          CLOSE
        </Link>
      );
    } else {
      return (
        <Link
          to="/menu"
          onMouseOver={() => { this.setState({ menuHover: true }) }}
          onMouseOut={() => { this.setState({ menuHover: false }) }}
          onClick={() => { this.setState({ menuHover: false }) }}
          className="text-2xl lg:text-3xl mr-2 lg:mr-0"
        >
          {this.state.menuHover ? 'OPEN' : 'Menu'}
        </Link>
      );
    };
  };

  render() {
    return (
      <div className="font-BarlowCondensed bg-lightBlue z-10 fixed top-0 right-0 left-0 mx-2 mt-2 lg:mt-5 pt-6 lg:mx-5 lg:pt-7 pb-5 lg:pb-12 px-5 lg:px-20">
        <div className="flex justify-between">
          <div className="flex items-center lg:items-end justify-between lg:justify-start w-full lg:w-auto">
            <div className="font-Caveat text-5xl lg:text-6xl mr-10">Ryu</div>
            {this.renderMenuButton()}
          </div>
          <button
            onMouseOver={() => { setTimeout((() => { this.setState({ sayhelloHover: true }) }), 200) }}
            onMouseOut={() => { this.setState({ sayhelloHover: false }) }}
            className="text-2xl hidden lg:flex justify-between items-end transition-all delay-200 hover:tracking-wide focus:outline-none"
            type="button">
            Say Hello
            <i className={`far ${this.state.sayhelloHover ? 'fa-comment-dots' : 'fa-comment'} ml-2`}></i>
          </button>
        </div>
      </div>
    )
  };
};

export default Header;