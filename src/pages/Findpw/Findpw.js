import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Findpw.scss';

class Findpw extends React.Component {
  render() {
    return (
      <div className="findpw">
        <h2 className="findpwTitle">FIND PW</h2>
        <div className="findpwContainer">
          <div className="findpwMethod">
            <input type="radio" name="findpwWhat" />
            이메일로 찾기
            <input type="radio" name="findpwWhat" />
            휴대폰 번호로 찾기
          </div>
          <form>
            <table className="findpwTable">
              <tbody>
                <tr>
                  <th scope="row">아이디</th>
                  <td>
                    <input type="text" className="findpwIdInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">이름</th>
                  <td>
                    <input type="text" className="findpwNameInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">이메일</th>
                  <td>
                    <input type="text" className="findpwMailInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">휴대폰 번호</th>
                  <td>
                    <input type="text" className="findpwPhoneInput" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button className="findpwBtn">확인</button>
        </div>
      </div>
    );
  }
}

export default Findpw;
