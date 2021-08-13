import React from 'react';
import { withRouter } from 'react-router-dom';
import SIGNUP_LIST from './SignupData.js';
import './Signup.scss';
import { validationFunction } from '../../utils/validation';
import { BASE_URL } from '../../config';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        account: '',
        password: '',
        email: '',
      },
      name: '',
      address: '',
      phone_number: '',
      repassword: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [name]: value,
      },
      [name]: value,
    });
  };

  testValidation = () => {
    const validInfo = Object.entries(this.state.userInfo);

    return validInfo.every(info => validationFunction[info[0]](info[1]));
  };

  signupTest = () => {
    // if (this.testValidation()) {
    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.userInfo.account,
        password: this.state.userInfo.password,
        name: this.state.name,
        address: this.state.address,
        phone_number: this.state.phone_number,
        email: this.state.userInfo.email,
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
    // } else {
    //   return alert('회원가입 조건을 지켜주세요!');
    // }
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
          <button className="signUpBtn" onClick={this.signupTest}>
            회원가입
          </button>
          <button className="signUpFailBtn">회원가입취소</button>
        </div>
      </main>
    );
  }
}

export default withRouter(Signup);
