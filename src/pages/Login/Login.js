import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { TOKEN_KEY } from '../../config.js';
import { BASE_URL } from '../../config.js';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
  }

  handleLoginInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = e => {
    e.preventDefault();
    const { account, password } = this.state;
    fetch(`${BASE_URL}/users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        account,
        password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.TOKEN) {
          localStorage.setItem(TOKEN_KEY, result.TOKEN);
          this.props.history.push('/');
        } else {
          alert('정보가 없습니다.');
        }
      });
  };

  render() {
    return (
      <div className="login">
        <h2 className="loginTitle">LOGIN</h2>
        <form className="loginForm">
          <input
            type="text"
            name="account"
            className="inputId"
            placeholder="아이디"
            onChange={this.handleLoginInput}
          />
          <input
            type="password"
            name="password"
            className="inputPassword"
            placeholder="비밀번호"
            onChange={this.handleLoginInput}
          />
          <div className="checkboxContainer">
            <input type="checkbox" className="inputCheckbox" />
            <span>아이디 저장 </span>
          </div>
          <button className="loginBtn" onClick={this.goToMain}>
            로그인
          </button>
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

export default withRouter(Login);
