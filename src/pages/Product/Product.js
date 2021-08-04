import React, { Component } from 'react';
import './Product.scss';
import ProTab from './Protab';
import ProHead from './Prohead';
import ProList from './Prolist';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <ProHead />
        <ProTab />
        <ProList />
      </div>
    );
  }
}

export default Product;
