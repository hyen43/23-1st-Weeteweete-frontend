import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Review from './pages/Review/Review';
import ReviewWrite from './pages/Review/ReviewWrite/ReviewWrite';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Review" component={Review} />
          <Route exact path="/ReviewWrite" component={ReviewWrite} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
