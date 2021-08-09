import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FindFormLayout from '../Findid/FindFormLayout';
import FINDPW_LIST from './FindpwData';
import './FindpwPage.scss';

class FindpwPage extends Component {
  render() {
    return (
      <main className="findpw">
        <h2 className="findpwTitle">FIND PW</h2>
        <div className="findpwContainer">
          <div className="findpwMethod">
            <span className="selectfindWay">
              가입시 등록한 아이디, 이름, 이메일이 필요합니다.
            </span>
          </div>
          <FindFormLayout
            type="findpw"
            title="비밀번호 찾기"
            inputData={FINDPW_LIST}
          />
        </div>
      </main>
    );
  }
}

export default withRouter(FindpwPage);
