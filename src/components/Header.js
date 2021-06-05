import React from 'react';

class Header extends React.Component {
  state = ({
    menuHover: false,
    sayhelloHover: false,
  });

  render() {
    return (
      <div className="font-BarlowCondensed fixed top-16 right-0 left-0 w-full px-20">
        <div className="flex justify-between">
          <div
            onMouseOver={() => { setTimeout((() => { this.setState({ menuHover: true }) }), 200) }}
            onMouseOut={() => { this.setState({ menuHover: false }) }}
            className="text-3xl"
          >
            {this.state.menuHover ? 'OPEN' : 'Menu'}
          </div>
          <button
            onMouseOver={() => { setTimeout((() => { this.setState({ sayhelloHover: true }) }), 200) }}
            onMouseOut={() => { this.setState({ sayhelloHover: false }) }}
            className="text-2xl flex justify-between items-center transition-all delay-200 hover:tracking-wide focus:outline-none"
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