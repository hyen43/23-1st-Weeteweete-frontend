import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../config.js';
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
    fetch(`${BASE_URL}/products${this.props.location.search}`)
      //fetch(`/data/ListItemData.json`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ prolist: data.RESULTS });
      });
  }

  render() {
    const { prolist } = this.state;
    return this.state.prolist ? (
      <div className="product">
        <ProHead />
        <ProTab prolist={prolist} />
        <ProList prolist={prolist} />
      </div>
    ) : null;
  }
}

export default withRouter(Product);
