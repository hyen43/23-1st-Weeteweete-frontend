import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';

class Signup extends React.Component {
  render() {
    return (
      <div className="signUp">
        <h2 className="signUpTitle">JOIN US</h2>
        <div className="signUpTitleBox">
          <span className="signUpTableName"> 기본정보 </span>
          <span className="signUpEssential">
            <span className="signUpEssentialMark">*</span> 필수입력사항
          </span>
        </div>
        <div className="signUpContainer">
          <form>
            <table className="signUpTable" summary="회원 기본정보">
              <tbody>
                <tr>
                  <th scope="row">
                    아이디 <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="text" className="signUpIdInput" />
                    <span> (영문소문자/숫자, 4~16자)</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    비밀번호 <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="password" className="signUpPwInput" />
                    <span>
                      {' '}
                      (영문 대소문자/숫자/특수문자 중 2가지 이상 조합,
                      10자~16자)
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    비밀번호 확인 <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="password" className="signUpPwCheckInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    이름 <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="text" className="signUpNameInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    주소 <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="text" className="signUpAddressInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    휴대전화 <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="text" className="signUpMobilePhoneInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    이메일 <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="text" className="signUpEmailInput" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    이메일 수신여부{' '}
                    <span className="signUpEssentialMark">*</span>
                  </th>
                  <td>
                    <input type="checkbox" />
                    <span> 동의함</span>
                    <p>
                      쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실
                      수 있습니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">* 주의 *</th>
                  <td className="signUpEssentialMark">
                    이름/휴대전화/이메일은 추후 비밀번호 찾기에 필요하니 꼭
                    정확하게 입력해 주세요 :D
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div className="signUpBtnList">
          <button className="signUpBtn">회원가입</button>
          <button className="signUpFailBtn">회원가입취소</button>
        </div>
      </div>
    );
  }
}

export default Signup;
