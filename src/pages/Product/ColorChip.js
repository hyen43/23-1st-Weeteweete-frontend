import React, { Component } from 'react';
import './ColorChip.scss';

class ColorChip extends Component {
  clickColorDefault = e => {
    const { selectColorSet, sectionIndex } = this.props;
    const targetColor = e.target.getAttribute('data-color');
    selectColorSet(targetColor, sectionIndex);
  };

  render() {
    return this.props.uniqueColor.map(colorElement => {
      const { color } = colorElement;
      return (
        <li key={color}>
          <button
            className={color}
            onClick={this.clickColorDefault}
            data-color={color}
          >
            <span>{color}</span>
          </button>
        </li>
      );
    });
  }
}

export default ColorChip;
