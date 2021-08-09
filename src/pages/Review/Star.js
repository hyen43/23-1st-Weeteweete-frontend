import React, { Component } from 'react';
import './Review.scss';

class Star extends Component {
  render() {
    const { active } = this.props;
    return (
      <>
        <span className={active ? 'active' : ''} key={this.props.el}>
          ★
        </span>
      </>
    );
  }
}
export default Star;
