import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-6">
          <div className="text-3xl text-violet-700 font-black">Portfolio</div>
          <button
            className="px-6 py-2 text-violet-500 font-bold border border-violet-500 rounded-lg
            hover:bg-violet-700 hover:text-white focus:outline-none"
            type="button"
          >
            聯絡我
          </button>
        </div>
      </div>
    );
  };
};

export default Header;