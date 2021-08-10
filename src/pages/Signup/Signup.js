import React from 'react';
import { withRouter } from 'react-router-dom';
import SIGNUP_LIST from './SignupData.js';
import './Signup.scss';
import { validationFunction } from '../../utils/validation.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        account: '',
        password: '',
        name: '',
        address: '',
        phone_number: '',
        email: '',
      },
      repassword: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      userInfo: { ...this.state.userInfo, [name]: value },
    });
  };

  isAllValid = property => {
    const alertMessage = {
      account: '아이디가 유효하지 않습니다!',
      password: '비밀번호가 유효하지 않습니다!',
      email: '이메일이 유효하지 않습니다!',
    };

    // for - in 으로 validationFunction 의 key 값을 가져온다.
    for (property in validationFunction) {
      // 작동시 key에 맞는 함수 호출
      const validationKey = validationFunction[property];

      // 작동시 key에 맞는 value 값 호출
      const validationValue = this.state.userInfo[property];

      // 함수의 value 값이 유효성을 만족하지 않으면 실행
      if (!validationKey(validationValue)) {
        console.log(!validationKey(validationValue));
        return console.log(alertMessage[property]);
      }
    }
  };

  signupTest = () => {
    const { account, password, name, address, phone_number, email } =
      this.state;
    fetch('http://10.58.2.84:8000/users/singup', {
      method: 'POST',
      // userInfo 객체 자체를 POST 보내려고 하면 통신 연결 안됨
      body: JSON.stringify({
        account,
        password,
        name,
        address,
        phone_number,
        email,
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
                      onBlur={
                        name === 'account' ||
                        name === 'password' ||
                        name === 'email'
                          ? this.isAllValid()
                          : null
                      }
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
