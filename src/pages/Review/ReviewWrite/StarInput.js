import React, { Component } from 'react';
import './ReviewWrite.scss';

class StarInput extends Component {
  inputValue = e => {
    this.props.handleStar(e.target.value);
  };

  render() {
    return (
      <div className="rating">
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <div className="rate" key={item}>
              <label
                className={`starItem ${
                  this.props.value >= item ? 'selected' : ''
                }`}
              >
                <input
                  checked={this.props.value === item}
                  className="input"
                  onChange={this.inputValue}
                  type="radio"
                  value={item}
                />
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
export default StarInput;
