import React, { Component } from 'react';
import './FindFormLayout.scss';
import { withRouter } from 'react-router-dom';

class FindFormLayout extends Component {
  render() {
    const { title, inputData, inputTovalue, btnOnClick } = this.props;

    return (
      <div className="findFormLayoutContainer">
        <div className="findFormLayout">
          {inputData.map(list => {
            const { key, index, type, name } = list;
            return (
              <div className="findFormLayoutContainer" key={key}>
                <span className="findFormLayoutName">{index}</span>
                <input
                  className="findFormLayoutInput"
                  name={name}
                  type={type}
                  onChange={inputTovalue}
                />
              </div>
            );
          })}
        </div>
        <button
          className="findFormLayoutBtn"
          value={title}
          onClick={btnOnClick}
        >
          {title}
        </button>
      </div>
    );
  }
}

export default withRouter(FindFormLayout);
