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
          className="text-3xl"
        >
          {this.state.menuHover ? 'OPEN' : 'Menu'}
        </Link>
      );
    };
  };

  render() {
    return (
      <div className="font-BarlowCondensed bg-lightBlue fixed top-0 right-0 left-0 mx-5 mt-5 pt-7 pb-12 px-20">
        <div className="flex justify-between">
          <div className="flex items-end">
            <div className="font-Caveat text-6xl mr-10">Ryu</div>
            {this.renderMenuButton()}
          </div>
          <button
            onMouseOver={() => { setTimeout((() => { this.setState({ sayhelloHover: true }) }), 200) }}
            onMouseOut={() => { this.setState({ sayhelloHover: false }) }}
            className="text-2xl flex justify-between items-end transition-all delay-200 hover:tracking-wide focus:outline-none"
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