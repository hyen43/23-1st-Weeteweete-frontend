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
                <Link
                  to={`/products?product_id=${el.product}&category_id=${el.category}&option_id=${el.option}`}
                >
                  {content}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const MENU_LINK = [
  { key: 0, content: 'NEW', product: 0, category: 0, option: 0 },
  { key: 1, content: 'PLANNER', product: 1, category: 1, option: 1 },
  { key: 2, content: 'NOTES', product: 2, category: 2, option: 2 },
  { key: 3, content: 'PEN', product: 3, category: 3, option: 3 },
];

export default MenuLink;
