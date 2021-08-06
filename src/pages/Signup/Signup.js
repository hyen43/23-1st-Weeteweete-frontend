import React from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';
import SIGNUP_LIST from './SignupData.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      repassword: '',
      name: '',
      address: '',
      phone_number: '',
      email: '',
      accountValid: true,
      passwordValid: true,
      emailValid: true,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  signUpValidationCheck = () => {
    const {
      account,
      password,
      repassword,
      email,
      accountValid,
      passwordValid,
      emailValid,
    } = this.state;

    var accountCheck = /^[a-z0-9]{10,20}$/;
    var passwordCheck = /^[0-9]{8,20}$/;
    var emailCheck = /^[0-9a-zA-Z]+@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;

    if (!accountCheck.test(account)) {
      this.setState({
        accountValid: false,
      });
      alert('아이디는 영소문자 포함 10자리 이상이어야 합니다!');
    }
    if (!passwordCheck.test(password)) {
      this.setState({
        passwordValid: false,
      });
      alert('비밀번호는 숫자 8자리 이상이어야 합니다!');
    }
    if (password !== repassword) {
      this.setState({
        passwordValid: false,
      });
      alert('비밀번호와 비밀번호 확인은 일치해야 합니다!');
    }
    if (!emailCheck.test(email)) {
      this.setState({
        emailValid: false,
      });
      alert('이메일 형식을 지켜주세요!');
    }

    if (accountValid && passwordValid && emailValid === true) {
      alert('회원가입을 진행합니다.');
      this.signupTest();
    } else {
      alert('회원가입 요청에 실패하였습니다.');
    }
  };

  signupTest = () => {
    fetch('http://10.58.2.84:8000/users/singup', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.account,
        password: this.state.password,
        name: this.state.name,
        address: this.state.address,
        phone_number: this.state.phone_number,
        email: this.state.email,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert('회원가입 성공! 로그인 페이지로 이동합니다!');
          this.props.history.push('/login');
        } else {
          alert('회원가입 실패!');
        }
      });
  };
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
                  <div className="signUpInputBox">
                    <input
                      type={type}
                      name={name}
                      className={className}
                      onChange={this.handleInput}
                    />
                    <span>{explain}</span>
                  </div>
                </div>
              );
            })}
          </form>
        </div>
        <div className="signUpBtnList">
          <button className="signUpBtn" onClick={this.signUpValidationCheck}>
            회원가입
          </button>
          <button className="signUpFailBtn">회원가입취소</button>
        </div>
      </main>
    );
  }
}

export default withRouter(Signup);
