import React from 'react';
import { connect } from 'react-redux';
import { updateThemeColor } from '../actions';

import Banner from './Banner';
import About from './About';

class Home extends React.Component {
  componentDidMount() {
    this.props.updateThemeColor('lightBlue')
  }

  render() {
    return (
      <div className="pt-48 h-full">
        <div className="container mx-auto">
          <Banner />
          <About />
        </div>

      </div>
    );
  };
};

export default connect(null, { updateThemeColor })(Home);