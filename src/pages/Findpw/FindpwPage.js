import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FindFormLayout from '../Findid/FindFormLayout';
import FINDPW_DATA from './FindpwData';
import './FindpwPage.scss';

class FindpwPage extends Component {
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
    fetch('http://10.58.4.206:8000/users/password', {
      method: 'PATCH',
      body: JSON.stringify({
        account: this.state.account,
        name: this.state.name,
        email: this.state.email,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE) {
          alert('당신의 비밀번호는 ' + result.MESSAGE + ' 입니다.');
          console.log('통신 데이터 보기', result.MESSAGE);
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
            findpwTest={this.findpwTest}
            inputTovalue={this.inputTovalue}
          />
        </div>
      </main>
    );
  }
}

export default withRouter(FindpwPage);
