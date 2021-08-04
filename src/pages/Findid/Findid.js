import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Findid.scss';

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
              {/* radio button 클릭시 이메일 혹은 휴대폰 번호만 보이게 하기 */}
              <div className="findidName">
                <span className="findidFormName">이름</span>
                <input type="text" className="findidNameInput" />
              </div>
              <div className="findidMail">
                <span className="findidFormName">이메일로 찾기</span>
                <input type="text" className="findidMailInput" />
              </div>
              <div className="findidPhone">
                <span className="findidFormName">휴대폰 번호로 찾기</span>
                <input type="text" className="findidPhoneInput" />
              </div>
            </form>
          </div>

          <button className="findidBtn">확인</button>
        </div>
      </main>
    );
  }
}

export default withRouter(Findid);
