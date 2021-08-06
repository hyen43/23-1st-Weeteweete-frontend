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
    fetch('http://10.58.4.206:8000/products/main')
      //fetch('data/BestItemData.json')
      .then(data => data.json())
      .then(data => {
        console.log(data.RESULTS);
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
