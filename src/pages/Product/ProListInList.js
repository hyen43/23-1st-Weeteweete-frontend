import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProListInList.scss';

class ProListInList extends Component {
  render() {
    const { id, name, image, price, discount, stock, color } = this.props.list;
    return (
      <li
        className={
          this.props.selectColor === undefined ||
          this.props.selectColor === color
            ? 'active'
            : 'hidden'
        }
      >
        <Link to={`/url/${id}`}>
          {stock === 0 && <div className="soldOut">SOLD OUT</div>}
          <div className="thumb">
            <div className="img">
              <img alt={name} src={image[0]}></img>
            </div>
          </div>
          <div className="content">
            <div className="tit">{name}</div>
            <div className={Number(discount) ? 'price sales' : 'price'}>
              <span className="cost">{Number(price).toLocaleString()}원</span>
              {discount !== '0' && (
                <span className="salePrice">
                  할인 판매가 :
                  {(Number(price) - Number(discount)).toLocaleString()}원
                </span>
              )}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default ProListInList;
