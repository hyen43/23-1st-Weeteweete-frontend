import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class MenuLink extends Component {
  render() {
    const menuLink = [
      { key: 0, content: 'NEW' },
      { key: 1, content: 'PLANNER' },
      { key: 2, content: 'NOTES' },
      { key: 3, content: 'PEN' },
    ];
    return (
      <div className="menuLink">
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

export default MenuLink;
