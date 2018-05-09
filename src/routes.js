import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import Calculator from './containers/Calculator';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="calculator" component={Calculator}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
