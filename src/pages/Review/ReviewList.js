import React, { Component } from 'react';
import StarRating from './StarRating';
import './Review.scss';

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleAccordion = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { review } = this.props;
    return (
      <li onClick={this.toggleAccordion}>
        <div className="title">
          <div className="stars">
            <StarRating star={review.grade} />
          </div>
          <div className="content">
            <p>{review.content}</p>
          </div>
          <div className="date">{review.create_at.slice(0, 10)}</div>
          <div className="name">{review.name}</div>
        </div>
        <div className={`subContnet${this.state.isActive ? ' active' : ''}`}>
          <div className="text">{review.content}</div>
          <div className="imgs">
            <img alt="후기" src={review.image}></img>
          </div>
        </div>
      </li>
    );
  }
}
export default ReviewList;
