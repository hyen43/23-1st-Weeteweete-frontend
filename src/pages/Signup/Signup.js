import React from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';
import SIGNUP_LIST from './SignupData.js';

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
            {SIGNUP_LIST.map(list => {
              const { key, index, type, explain, name, className } = list;
              return (
                <div className="signUpFormBox" key={key}>
                  <span className="signUpFormIndex">
                    {index}
                    <span className="signUpEssentialMark">*</span>
                  </span>
                  <input type={type} name={name} className={className} />
                  <span>{explain}</span>
                </div>
              );
            })}
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
