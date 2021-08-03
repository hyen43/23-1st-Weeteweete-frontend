import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Findid.scss';

class Findid extends React.Component {
  render() {
    return (
      <div className="findid">
        <h2 className="findidTitle">FIND ID</h2>
        <div className="findidContainer">
          <div className="findidMethod">
            <input type="radio" name="findidWhat" />
            이메일로 찾기
            <input type="radio" name="findidWhat" />
            휴대폰 번호로 찾기
          </div>
          <form>
            <table className="findidTable">
              <tbody>
                <tr>
                  <th scope="row">이름</th>
                  <td>
                    <input type="text" className="findidNameInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">이메일</th>
                  <td>
                    <input type="text" className="findidMailInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">휴대폰 번호</th>
                  <td>
                    <input type="text" className="findidPhoneInput" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button className="findidBtn">확인</button>
        </div>
      </div>
    );
  }
}

export default Findid;
