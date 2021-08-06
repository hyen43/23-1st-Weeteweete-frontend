import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Findpw.scss';
import FINDPW_LIST from './FindpwData.js';

class Findpw extends React.Component {
  render() {
    return (
      <main className="findpw">
        <h2 className="findpwTitle">FIND PW</h2>
        <div className="findpwContainer">
          <div className="findpwMethod">
            <span className="selectfindWay">
              가입시 사용한 아이디, 이름, 이메일이 필요합니다.
            </span>
          </div>
          <div className="findpwForm">
            <form>
              {FINDPW_LIST.map(list => {
                const { key, index, type, name } = list;
                return (
                  <div className="findpwName" key={key}>
                    <span className="findpwFormName">{index}</span>
                    <input
                      type={type}
                      name={name}
                      className="findpwInput"
                    ></input>
                  </div>
                );
              })}
            </form>
          </div>

          <button className="findpwBtn">확인</button>
        </div>
      </main>
    );
  }
}

export default withRouter(Findpw);
