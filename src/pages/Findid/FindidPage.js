import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FindFormLayout from './FindFormLayout';
import FINDID_LIST from './FindidData';
import './FindidPage.scss';

class FindidPage extends Component {
  render() {
    return (
      <main className="findid">
        <h2 className="findidTitle">FIND ID</h2>
        <div className="findidContainer">
          <div className="findidMethod">
            <span className="selectfindWay">
              가입시 등록한 이름과 이메일이 필요합니다.
            </span>
          </div>
          <FindFormLayout
            type="findid"
            title="아이디 찾기"
            inputData={FINDID_LIST}
          />
        </div>
      </main>
    );
  }
}

export default withRouter(FindidPage);
