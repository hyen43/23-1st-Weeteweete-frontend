import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
// import Findid from './pages/Findid/Findid';
// import Findpw from './pages/Findpw/Findpw';
import Productdetail from './pages/Productdetail/Productdetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Productdetail" component={Productdetail} />
          {/* <Route exact path="/Findid" component={Findid} />
          <Route exact path="/Findpw" component={Findpw} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
