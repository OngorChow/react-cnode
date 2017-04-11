/**
 * Created by ronchow on 2017/2/25.
 */

import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import IndexList from '../container/IndexList.jsx'; //首页container
import Signin from '../container/Signin.jsx'; //登录container

class Roots extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const RouteConfig = (
  <Router history={history}>
    <Route path="/" component={Roots}>
      <IndexRoute component={IndexList} />
      <Route path="signin" component={Signin} />
    </Route>
  </Router>
);

export default RouteConfig;