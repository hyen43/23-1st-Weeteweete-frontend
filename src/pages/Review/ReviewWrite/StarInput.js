import React, { Component } from 'react';
import './ReviewWrite.scss';

class StarInput extends Component {
  inputValue = e => {
    this.props.handleStar(e.target.dataset.idx);
  };

  render() {
    return (
      <div className="rating">
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <label
              className={`starItem ${
                this.props.value >= item ? 'selected' : ''
              }`}
              key={item}
              data-idx={item}
              onMouseOver={this.inputValue}
            >
              <input
                checked={this.props.value === item}
                className="input"
                onChange={this.inputValue}
                type="radio"
                value={item}
                data-idx={item}
              />
            </label>
          );
        })}
      </div>
    );
  }
}
export default StarInput;
