import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class myPageLink extends Component {
  render() {
    return (
      <div className="myPageLink">
        <ul>
          {MY_PAGE_LINK.map(el => {
            const { key, content } = el;
            return (
              <li key={key}>
                <Link to="/">{content}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const MY_PAGE_LINK = [
  { key: 0, content: '로그인' },
  { key: 1, content: '회원가입' },
  { key: 2, content: '매장안내' },
  { key: 3, content: 'FAQ' },
  { key: 4, content: '주문조회' },
  { key: 5, content: '장바구니' },
];

export default myPageLink;
