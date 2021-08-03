import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

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
                  return (
                    <li key={pro.id}>
                      <Link to="/">
                        <div className="thumb">
                          <div className="img">
                            <img alt={pro.name} src={pro.image[0]}></img>
                          </div>
                        </div>
                        <div className="cnt">
                          <div className="tit">{pro.name}</div>
                          <div
                            className={
                              Number(pro.discount) ? 'price sales' : 'price'
                            }
                          >
                            <span className="cost">{pro.price}</span>
                            <span className="salePrice">
                              {Number(pro.price) - Number(pro.discount)}
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
