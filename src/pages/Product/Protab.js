import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

class ProTab extends Component {
  render() {
    return (
      <div className="proTab">
        <div className="depth1">
          <ul>
            <li className="active">
              <Link to="/">텐미닛 플래너</Link>
            </li>
            <li>
              <Link to="/">태스크 매니저</Link>
            </li>
            <li>
              <Link to="/">플랜 보드</Link>
            </li>
            <li>
              <Link to="/">다이어리 캘린더</Link>
            </li>
          </ul>
        </div>
        <div className="depth2">
          <ul>
            <li className="active">
              <Link to="/">31DAYS</Link>
            </li>
            <li>
              <Link to="/">100DAYS</Link>
            </li>
            <li>
              <Link to="/">HALF YEAR</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProTab;
