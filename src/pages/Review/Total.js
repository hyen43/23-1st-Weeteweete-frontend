import React, { Component } from 'react';
import './Review.scss';

class Total extends Component {
  render() {
    const { reviewList } = this.props;
    const starArry = reviewList.map(review => {
      return review.grade;
    });
    const starSum = starArry.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    const starAverage = starSum / starArry.length;
    return (
      <div className="total">
        <div className="totalStar">
          {String(starAverage) === 'NaN' ? 0 : starAverage}
        </div>
        <div className="totalReview">후기 {starArry.length}개</div>
      </div>
    );
  }
}
export default Total;
