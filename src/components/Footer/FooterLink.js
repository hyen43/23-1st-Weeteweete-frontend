import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class FooterLink extends Component {
  render() {
    const footLink = [
      { key: 0, content: '개인정보 취급방침' },
      { key: 1, content: '이용약관' },
      { key: 2, content: '매장안내' },
      { key: 3, content: '1:1문의' },
    ];
    return (
      <div className="footerLink">
        <div className="contain">
          <ul>
            {footLink.map(el => {
              return (
                <li key={el.key}>
                  <Link to="/">{el.content}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterLink;
