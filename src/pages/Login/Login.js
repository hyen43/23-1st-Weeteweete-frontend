import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h2 className="loginTitle">LOGIN</h2>
        <form className="loginForm">
          <input type="text" className="inputId" placeholder="아이디" />
          <input
            type="password"
            className="inputPassword"
            placeholder="비밀번호"
          />
          <div className="checkboxContainer">
            <input type="checkbox" className="inputCheckbox" />
            <span>아이디 저장 </span>
          </div>
          <button className="loginBtn">로그인</button>
          <div className="findIdPw">
            <Link to="/Findid">- 아이디 찾기 </Link>
            <Link to="/Findpw">- 비밀번호 찾기</Link>
          </div>
          <button className="signUpBtn">회원가입</button>
        </form>
      </div>
    );
  }
}

export default Login;
