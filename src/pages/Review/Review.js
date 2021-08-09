import React, { Component } from 'react';
import Total from './Total';
import ReviewList from './ReviewList';
import './Review.scss';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
      itemId: '',
    };
  }

  componentDidMount() {
    fetch('data/ReviewData.json')
      .then(data => data.json())
      .then(data => {
        console.log(data[1].reviews);
        this.setState({
          reviewList: data[1].reviews,
          itemId: data[0].item_id,
        });
      });
  }

  reviewWriteBtn = () => {
    // fetch('url', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: localStorage.getItem('token'),
    //     itemId :this.state.itemId,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       pathname: 'ReviewWrite',
    //       state: { itemId: this.state.itemId },
    //     }
    //   });
    this.props.history.push({
      pathname: 'ReviewWrite',
      state: { itemId: this.state.itemId },
    });
  };

  render() {
    const { reviewList } = this.state;
    return (
      <div className="review">
        <div className="totalTitle">
          <Total reviewList={reviewList} />
          <button onClick={this.reviewWriteBtn}>WRTIE</button>
        </div>
        <div className="reviewList">
          <ul>
            {reviewList.map(review => {
              return <ReviewList review={review} key={review.id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Review;
