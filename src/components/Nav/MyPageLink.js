import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Nav.scss';

class myPageLink extends Component {
  logOut = () => {
    localStorage.removeItem('TOKKEN');
    this.props.history.push('/');
  };
  render() {
    const token = localStorage.getItem('TOKKEN');
    return (
      <div className="myPageLink">
        <ul>
          {token
            ? NAV_LINK_TOKENIN.map(menu => {
                const { key, content, url } = menu;
                return (
                  <li key={key}>
                    <Link to={url}>{content}</Link>
                  </li>
                );
              })
            : NAV_LINK_TOKENOUT.map(menu => {
                const { key, content, url } = menu;
                return (
                  <li key={key}>
                    <Link to={url}>{content}</Link>
                  </li>
                );
              })}
        </ul>
        {token ? <button onClick={this.logOut}>로그아웃</button> : null}
      </div>
    );
  }
}
const NAV_LINK_TOKENOUT = [
  { key: 0, content: '로그인', url: '/Login' },
  { key: 1, content: '회원가입', url: '/Signup' },
  { key: 2, content: '매장안내', url: '/' },
  { key: 3, content: 'FAQ', url: '/' },
];

const NAV_LINK_TOKENIN = [
  { key: 2, content: '매장안내', url: '/' },
  { key: 3, content: 'FAQ', url: '/' },
  { key: 4, content: '주문조회', url: '/' },
  { key: 5, content: '장바구니', url: '/' },
];

export default withRouter(myPageLink);
