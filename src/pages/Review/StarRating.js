import React, { Component } from 'react';
import Star from './Star';
import './Review.scss';

class StarRating extends Component {
  render() {
    const { star } = this.props;
    return (
      <>
        {[...Array(5).keys()].map(el => {
          return star > el ? (
            <Star active={true} key={el} />
          ) : (
            <Star active={false} key={el} />
          );
        })}
      </>
    );
  }
}
export default StarRating;
