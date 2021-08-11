import React, { Component } from 'react';
import MainItem from './MainItem';
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
                  const { id, name, image, discount, price, stock } = pro;
                  return (
                    <MainItem
                      key={id}
                      id={id}
                      name={name}
                      image={image}
                      discount={discount}
                      price={price}
                      stock={stock}
                    />
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
