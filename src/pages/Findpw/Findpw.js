import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FindFormLayout from '../Findid/FindFormLayout';
import FINDPW_DATA from './FindpwData';
import './Findpw.scss';

class Findpw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      account: '',
      email: '',
    };
  }

  inputTovalue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  findpwTest = e => {
    e.preventDefault();
    const { account, name, email } = this.state;
    fetch('http://10.58.4.206:8000/users/password', {
      method: 'PATCH',
      body: JSON.stringify({ account, name, email }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE) {
          alert('당신의 비밀번호는 ' + result.MESSAGE + ' 입니다.');
        }
      });
  };

  render() {
    return (
      <main className="findpw">
        <h2 className="findpwTitle">FIND PW</h2>
        <div className="findpwContainer">
          <div className="findpwMethod">
            <span className="selectfindWay">
              가입시 등록한 아이디, 이름, 이메일이 필요합니다.
            </span>
          </div>
          <FindFormLayout
            type="findpw"
            title="비밀번호 찾기"
            inputData={FINDPW_DATA}
            btnOnClick={this.findpwTest}
            inputTovalue={this.inputTovalue}
          />
        </div>
      </main>
    );
  }
}

export default withRouter(Findpw);
