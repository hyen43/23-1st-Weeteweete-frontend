import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Findid.scss';
import FINDID_LIST from './FindidData';

class Findid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      account: '',
      email: '',
    };
  }
  findidInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  findidTest = e => {
    e.preventDefault();
    fetch('http://10.58.4.206:8000/users/account', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
      }),
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
          <div className="findidForm">
            <form>
              {FINDID_LIST.map(list => {
                const { key, index, type, name } = list;
                return (
                  <div className="findidName" key={key}>
                    <span className="findidFormName">{index}</span>
                    <input
                      onChange={this.findidInput}
                      type={type}
                      name={name}
                      className="findidInput"
                    />
                  </div>
                );
              })}
            </form>
          </div>

          <button className="findidBtn" onClick={this.findidTest}>
            확인
          </button>
        </div>
      </main>
    );
  }
}

export default withRouter(Findid);
