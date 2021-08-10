import React from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';

class SignupInput extends React.Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          onBlur={this.props.onBlur}
        />
        <span>설명</span>
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          onBlur={this.props.onBlur}
        />
        <span>설명</span>
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        <span>설명</span>
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        <span>설명</span>
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        <span>설명</span>
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          onBlur={this.props.onBlur}
        />
        <span>설명</span>
        <input
          className={this.props.className}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        <span>설명</span>
      </div>
    );
  }
}

export default withRouter(SignupInput);
