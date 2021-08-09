import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class FindLayout extends Component {
  render() {
    return <div className="findLayout">{this.props.children}</div>;
  }
}

export default withRouter(FindLayout);
