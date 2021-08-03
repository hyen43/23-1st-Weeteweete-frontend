import React, { Component } from 'react';
import './Main.scss';
import MainVisual from './Mainvisual';
import MainBestItem from './MainBestItem';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      bestList: [],
    };
  }

  componentDidMount() {
    // fetch('http://10.58.1.209:8000/products/1/1/1', {
    fetch('http://localhost:3000/data/BestItemData.json')
      .then(data => data.json())
      .then(data => {
        this.setState({ bestList: data });
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
