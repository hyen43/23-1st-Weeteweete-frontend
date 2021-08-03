import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class myPageLink extends Component {
  render() {
    const menuLink = [
      { key: 0, content: '로그인' },
      { key: 1, content: '회원가입' },
      { key: 2, content: '매장안내' },
      { key: 3, content: 'FAQ' },
      { key: 4, content: '주문조회' },
      { key: 5, content: '장바구니' },
    ];
    return (
      <div className="myPageLink">
        <ul>
          {menuLink.map(el => {
            return (
              <li key={el.key}>
                <Link to="/">{el.content}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default myPageLink;
