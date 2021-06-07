import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
// import Banner from './Banner';
// import Portfolio from './Portfolio';
import Menu from './Menu';
import Home from './Home';

class App extends React.Component {
  renderThemeColor() {
    switch (this.props.themeColor) {
      case 'blue':
        return 'bg-blue-100';
      case 'lightBlue':
        return 'bg-lightBlue';
    }
  }

  render() {
    return (
      <div className="overflow-hidden p-5 text-blue-900 w-full h-screen" >
        <div className={`${this.renderThemeColor()} h-full overflow-y-auto scrollbar-none`}>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/" component={Home} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { themeColor: state.themeColor };
}

export default connect(mapStateToProps)(App);
