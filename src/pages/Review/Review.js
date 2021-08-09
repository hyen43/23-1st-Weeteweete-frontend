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
    // api 적용시 사용할 로직입니다! 일단은 주석처리 해놓겠습니다.
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
          <button onClick={this.reviewWriteBtn}>후기작성</button>
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
