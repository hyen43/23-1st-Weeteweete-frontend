import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FooterLink.scss';

class FooterLink extends Component {
  render() {
    return (
      <div className="footerLink">
        <div className="contain">
          <ul>
            {FOOT_LINK.map(el => {
              const { key, content } = el;
              return (
                <li key={key}>
                  <Link to="/">{content}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const FOOT_LINK = [
  { key: 0, content: '개인정보 취급방침' },
  { key: 1, content: '이용약관' },
  { key: 2, content: '매장안내' },
  { key: 3, content: '1:1문의' },
];
export default FooterLink;
