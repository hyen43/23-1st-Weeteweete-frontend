import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Findpw.scss';
import FINDPW_LIST from './FindpwData.js';

class Findpw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      account: '',
      email: '',
    };
  }
  findpwInput = e => {
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
            <input type="radio" name="findpwWhat" />
            <span className="selectfindWay">이메일로 찾기</span>
          </div>
          <div className="findpwForm">
            <form>
              {FINDPW_LIST.map(list => {
                const { key, index, type, name } = list;
                return (
                  <div className="findpwName" key={key}>
                    <span className="findpwFormName">{index}</span>
                    <input
                      onChange={this.findpwInput}
                      type={type}
                      name={name}
                      className="findpwInput"
                    ></input>
                  </div>
                );
              })}
            </form>
          </div>

          <button className="findpwBtn" onClick={this.findpwTest}>
            확인
          </button>
        </div>
      </main>
    );
  }
}

export default withRouter(Findpw);
