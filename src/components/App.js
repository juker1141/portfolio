import React from 'react';

import Header from './Header';
import Banner from './Banner';
import About from './About';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <div className="overflow-x-hidden p-5 text-blue-900 w-full h-screen">
      <div className="bg-lightblue h-full reletive">
        <Header />
      </div>
      {/* <Banner />
      <About />
      <Portfolio /> */}
    </div>
  )
};

export default App;
