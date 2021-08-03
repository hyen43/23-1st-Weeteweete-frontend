import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="contain">
          <div className="siteLogo">
            <h1>weeteweete</h1>
          </div>
          <div className="link">
            <div className="myPageLink">
              <ul>
                <li>
                  <Link to="Login">로그인/회원가입</Link>
                </li>
                {/* <li>
                  <Link to="/">마이페이지</Link>
                </li> */}
                {/* <li>
                  <Link to="/">로그아웃</Link>
                </li> */}
                <li>
                  <Link to="/">매장안내</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">주문조회</Link>
                </li>
                <li>
                  <Link to="/">장바구니</Link>
                </li>
              </ul>
            </div>
            <div className="menuLink">
              <ul>
                <li>
                  <Link to="/">NEW</Link>
                </li>
                <li>
                  <Link to="/">PLANNER</Link>
                </li>
                <li>
                  <Link to="/">NOTES</Link>
                </li>
                <li>
                  <Link to="/">PEN</Link>
                </li>
                <li>
                  <Link to="/">ACC</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
