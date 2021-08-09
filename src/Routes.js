import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Findid from './pages/Findid/Findid';
import Modal from './pages/Findid/Watcha/Modal';
import Modal2 from './pages/Findid/Watcha/Modal2';
import FindidPage from './pages/Findid/FindidPage';
import FindpwPage from './pages/Findpw/FindpwPage';
// import Findpw from './pages/Findpw/Findpw';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Findid" component={Findid} />
          <Route exact path="/Modal" component={Modal} />
          <Route exact path="/Modal2" component={Modal2} />
          <Route exact path="/FindidPage" component={FindidPage} />
          <Route exact path="/FindpwPage" component={FindpwPage} />
          {/* <Route exact path="/Findpw" component={Findpw} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
