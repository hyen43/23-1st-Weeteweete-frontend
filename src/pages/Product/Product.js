import React, { Component } from 'react';
import './Product.scss';
import ProTab from './Protab';
import ProHead from './Prohead';
import ProList from './Prolist';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prolist: [],
    };
  }

  componentDidMount() {
    fetch('/data/ListItemData.json')
      .then(data => data.json())
      .then(data => {
        this.setState({ prolist: data });
      });
  }

  render() {
    const { prolist } = this.state;
    return (
      <div className="product">
        <ProHead />
        <ProTab prolist={prolist} />
        <ProList prolist={prolist} />
      </div>
    );
  }
}

export default Product;
