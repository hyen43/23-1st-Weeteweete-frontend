import React, { Component } from 'react';
import './FindFormLayout.scss';
import { withRouter } from 'react-router-dom';

class FindFormLayout extends Component {
  idbuttonORpwbutton = e => {
    this.props.title === '아이디 찾기'
      ? this.props.findidTest(e)
      : this.props.findpwTest(e);
  };

  render() {
    const { title, inputData } = this.props;

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
                  onChange={this.props.inputTovalue}
                />
              </div>
            );
          })}
        </div>
        <button
          className="findFormLayoutBtn"
          value={title}
          onClick={this.idbuttonORpwbutton}
        >
          {title}
        </button>
      </div>
    );
  }
}

export default withRouter(FindFormLayout);
