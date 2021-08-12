import React, { Component } from 'react';
import Total from './Total';
import { withRouter } from 'react-router-dom';
import ReviewList from './ReviewList';
import { TOKEN_KEY } from '../../config.js';
import { BASE_URL } from '../../config.js';
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
    fetch(`${BASE_URL}/products/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(data => {
        console.log(data.RESULT);
        this.setState({
          reviewList: data.RESULT.review,
          itemId: this.props.match.params.id,
        });
      });
  }

  reviewWriteBtn = () => {
    fetch(`${BASE_URL}/products/${this.props.match.params.id}`, {
      method: 'POST',
      body: JSON.stringify({
        //token: localStorage.getItem('TOKEN'),
        itemId: this.state.itemId,
      }),
      headers: {
        Authorization: localStorage.getItem(TOKEN_KEY),
        Accept: 'application / json',
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'UNATHORIZED') {
          alert('리뷰 권한이 없습니다!');
          return;
        }
        if (result.MESSAGE === 'INVALIDTOKEN') {
          alert('로그인 후 이용해주세요!');
          return;
        }
        if (result.MESSAGE === 'EXIST') {
          alert('이미 작성하신 상품입니다!');
          return;
        } else {
          console.log(this.state.itemId);
          this.props.history.push({
            pathname: `/ReviewWrite`,
            state: { itemId: this.state.itemId },
          });
        }
      });
    // .catch(err => {
    //   alert('버튼 누르고 이동 실패');
    // });
    // this.props.history.push({
    //   pathname: 'ReviewWrite',
    //   state: { itemId: this.state.itemId },
    // });
    //this.props.history.push('/ReviewWrite');
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
              return <ReviewList review={review} key={review.review_id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(Review);
