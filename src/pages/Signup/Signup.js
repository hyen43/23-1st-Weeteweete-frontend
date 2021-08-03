import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';

class Signup extends React.Component {
  render() {
    return (
      <main className="signUp">
        <h2 className="signUpTitle">JOIN US</h2>
        <div className="signUpTitleBox">
          <h4 className="signUpTableName">기본정보</h4>
          <h4 className="signUpEssential">
            <span className="signUpEssentialMark">*</span> 필수입력사항
          </h4>
        </div>
        <div className="signUpContainer">
          <form className="signUpForm">
            <div className="signUpFormId">
              <span className="signUpFormName">
                아이디<span className="signUpEssentialMark">*</span>
              </span>
              <input type="text" />
              <span>(영문소문자/숫자, 4~16자)</span>
            </div>
            <div className="signUpFormPw">
              <span className="signUpFormName">
                비밀번호<span className="signUpEssentialMark">*</span>
              </span>
              <input type="password" />
              <span>
                (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
              </span>
            </div>
            <div className="signUpFormRePw">
              <span className="signUpFormName">
                비밀번호 확인<span className="signUpEssentialMark">*</span>
              </span>
              <input type="password" />
            </div>
            <div className="signUpFormName">
              <span className="signUpFormName">
                이름<span className="signUpEssentialMark">*</span>
              </span>
              <input type="text" />
            </div>
            <div className="signUpFormAddress">
              <span className="signUpFormName">
                주소<span className="signUpEssentialMark">*</span>
              </span>
              <input type="text" />
            </div>
            <div className="signUpFormPhone">
              <span className="signUpFormName">
                전화번호<span className="signUpEssentialMark">*</span>
              </span>
              <input type="text" />
            </div>
            <div className="signUpFormMail">
              <span className="signUpFormName">
                이메일<span className="signUpEssentialMark">*</span>
              </span>
              <input type="text" />
            </div>
            <div>
              <span className="signUpFormName">
                이메일 수신여부<span className="signUpEssentialMark">*</span>
              </span>
              <input type="checkbox" />
              <span>
                쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실 수
                있습니다.
              </span>
            </div>
            <div>
              <span className="signUpFormName">* 주의 *</span>
              <span>
                이름/휴대전화/이메일은 추후 비밀번호 찾기에 필요하니 꼭 정확하게
                입력해 주세요 :D
              </span>
            </div>
          </form>
        </div>
        <div className="signUpBtnList">
          <button className="signUpBtn">회원가입</button>
          <button className="signUpFailBtn">회원가입취소</button>
        </div>
      </main>
    );
  }
}

export default withRouter(Signup);
