import React, { Component } from 'react';
import './Main.scss';
import MainVisual from './Mainvisual';
import MainBestItem from './MainBestItem';
import { BASE_URL } from '../../config.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      bestList: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/products?main=True`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ bestList: data.RESULTS });
      });
  }

  render() {
    const { bestList } = this.state;
    return (
      <div className="main">
        <MainVisual />
        <MainBestItem bestList={bestList} />
      </div>
    );
  }
}
export default Main;
