import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import MenuLink from './MenuLink';
import MyPageLink from './MyPageLink';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="contain">
          <div className="siteLogo">
            <h1>
              <Link to="/">weeteweete</Link>
            </h1>
          </div>
          <div className="link">
            <MyPageLink />
            <MenuLink />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
