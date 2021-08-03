import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class MenuLink extends Component {
  render() {
    return (
      <div className="menuLink">
        <ul>
          {MENU_LINK.map(el => {
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
const MENU_LINK = [
  { key: 0, content: 'NEW' },
  { key: 1, content: 'PLANNER' },
  { key: 2, content: 'NOTES' },
  { key: 3, content: 'PEN' },
];

export default MenuLink;
