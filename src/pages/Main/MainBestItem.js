import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainBestItem.scss';

class MainBestItem extends Component {
  render() {
    const { bestList } = this.props;
    return (
      <div className="bestItem">
        <div className="contain">
          <h2>BEST ITEMS</h2>
          <ul>
            {bestList &&
              bestList.map(el => {
                return el.information.map(pro => {
                  const { id, name, image, discount, price } = pro;
                  return (
                    <li key={id}>
                      <Link to="/">
                        <div className="thumb">
                          <div className="img">
                            <img alt={name} src={image[0]}></img>
                          </div>
                        </div>
                        <div className="content">
                          <div className="tit">{name}</div>
                          <div
                            className={
                              Number(discount) ? 'price sales' : 'price'
                            }
                          >
                            <span className="cost">
                              {Number(price).toLocaleString()} 원
                            </span>
                            <span className="salePrice">
                              할인 판매가 :
                              {(
                                Number(price) - Number(discount)
                              ).toLocaleString()}
                              원
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                });
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainBestItem;
