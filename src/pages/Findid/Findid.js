import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FindFormLayout from './FindFormLayout';
import FINDID_LIST from './FindidData';
import './Findid.scss';

class Findid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  inputTovalue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  findidTest = e => {
    e.preventDefault();
    const { name, email } = this.state;
    fetch('http://10.58.4.206:8000/users/account', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.RESULT) {
          alert('당신의 아이디는 ' + result.RESULT[0].account + ' 입니다.');
          console.log('통신 데이터 보기', result.RESULT);
        }
      });
  };

  render() {
    return (
      <main className="findid">
        <h2 className="findidTitle">FIND ID</h2>
        <div className="findidContainer">
          <div className="findidMethod">
            <span className="selectfindWay">
              가입시 등록한 이름과 이메일이 필요합니다.
            </span>
          </div>
          <FindFormLayout
            type="findid"
            title="아이디 찾기"
            inputData={FINDID_LIST}
            btnOnClick={this.findidTest}
            inputTovalue={this.inputTovalue}
          />
        </div>
      </main>
    );
  }
}

export default withRouter(Findid);
