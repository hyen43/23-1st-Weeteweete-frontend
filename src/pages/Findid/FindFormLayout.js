import React, { Component } from 'react';
import FindLayout from './FindLayout';
import './FindFormLayout.scss';
import { withRouter } from 'react-router-dom';

class FindFormLayout extends Component {
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
    console.log(this.state.name);
    console.log(this.state.account);
    console.log(this.state.email);
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

  idbuttonORpwbutton = () => {
    this.props.title === '아이디 찾기' ? this.findidtest() : this.findpwTest();
  };

  render() {
    const { title, inputData } = this.props;

    return (
      <FindLayout>
        <div className="findFormLayout">
          {inputData.map(list => {
            const { key, index, type, name } = list;
            return (
              <div className="findFormLayoutContainer" key={key}>
                <span className="findFormLayoutName">{index}</span>
                <input
                  className="findFormLayoutInput"
                  name={name}
                  type={type}
                  onChange={this.inputTovalue}
                />
              </div>
            );
          })}
        </div>
        <button
          className="findFormLayoutBtn"
          value={title}
          onClick={this.idbuttonORpwbutton}
        >
          {title}
        </button>
      </FindLayout>
    );
  }
}

export default withRouter(FindFormLayout);
