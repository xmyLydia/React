import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from '../src/hoc/asyncComponent/asyncComponent';

const asyncCheck = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});
const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onTyAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component= {asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheck} />
          <Route path="/orders" exact component={asyncOrders} />
          <Route path="/auth" exact component={asyncAuth} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div >
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTyAutoSignup: () => dispatch(actions.authCheckState())
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
