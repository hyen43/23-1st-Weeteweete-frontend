import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Findid.scss';
import FINDID_LIST from './FindidData';

class Findid extends React.Component {
  render() {
    return (
      <main className="findid">
        <h2 className="findidTitle">FIND ID</h2>
        <div className="findidContainer">
          <div className="findidMethod">
            <input type="radio" name="findidWhat" />
            <span className="selectfindWay">이메일로 찾기</span>
            <input type="radio" name="findidWhat" />
            <span className="selectfindWay">휴대폰 번호로 찾기</span>
          </div>
          <div className="findidForm">
            <form>
              {FINDID_LIST.map(list => {
                const { key, index, type, name } = list;
                return (
                  <div className="findidName" key={key}>
                    <span className="findidFormName">{index}</span>
                    <input
                      type={type}
                      name={name}
                      className="findidInput"
                    ></input>
                  </div>
                );
              })}
            </form>
          </div>

          <button className="findidBtn">확인</button>
        </div>
      </main>
    );
  }
}

export default withRouter(Findid);
