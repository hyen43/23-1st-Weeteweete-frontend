import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Findid from './pages/Findid/Findid';
import Findpw from './pages/Findpw/Findpw';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Payment from './pages/Payment/Payment';
import Signup from './pages/Signup/Signup';
import Cart from './pages/Cart/Cart';
import Review from './pages/Review/Review';
import ReviewWrite from './pages/Review/ReviewWrite/ReviewWrite';
import Productdetail from './pages/Productdetail/Productdetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/findid" component={Findid} />
          <Route exact path="/findpw" component={Findpw} />
          {/* <Route
            exact
            path="/products"
            component={Product}
          /> */}
          <Route exact path="/products" component={Product} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/productdetail" component={Productdetail} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/reviewWrite" component={ReviewWrite} />
          <Route exact path="/products/:id" component={Productdetail} />
          <Route exact path="/orders/cart" component={Cart} />
          {/* <Route exact path="/productsdetail" component={Productdetail} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
