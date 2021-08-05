import React, { Component } from 'react';
import './Prolist.scss';

class ColorChip extends Component {
  clickColorDefault = e => {
    const { selectColorSet, sectionIndex } = this.props;
    const targetColor = e.target.className;
    selectColorSet(targetColor, sectionIndex);
  };
  render() {
    return this.props.uniqueColor.map(el => {
      const { color } = el;
      return (
        <li key={color}>
          <button className={color} onClick={this.clickColorDefault}>
            <span>{color}</span>
          </button>
        </li>
      );
    });
  }
}

export default ColorChip;
