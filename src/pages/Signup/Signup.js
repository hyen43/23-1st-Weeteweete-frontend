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
    };
  }

  signupTest = () => {
    fetch('http://10.58.7.133:8000/users/signup', {
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
      .then(
        data => console.log('통신 완료 데이터 : ', data)
        // if (data.message === 'SUCCESS') {
        //   alert('회원가입 성공!');
        //   this.props.history.push('/login');
        // } else {
        //  alert('회원가입 실패!');
        // }
        //
      );
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
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
