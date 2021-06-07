import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateThemeColor } from '../actions';

import Header from './Header';

class Menu extends React.Component {
  componentDidMount() {
    this.props.updateThemeColor('blue')
  };

  render() {
    return (
      <div className="pt-32">
        <Link to="/about">About</Link>
      </div>
    );
  }
};

export default connect(null, { updateThemeColor })(Menu);