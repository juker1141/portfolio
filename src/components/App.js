import React from 'react';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import GuideButton from './GuideButton';

class App extends React.Component {

  render() {
    return (
      <div className="p-2 lg:p-5 text-blue-900 w-full h-full overflow-y-auto relative font-Roboto" >
        <div className="fixed top-0 w-full pt-2 lg:pt-5 bg-white z-20" />
        <Header />
        <Home />
        <Footer />
        <GuideButton />
        <div className="fixed bottom-0 w-full pb-2 lg:pb-5 bg-white z-20" />
      </div>
    )
  }
};

export default App;
