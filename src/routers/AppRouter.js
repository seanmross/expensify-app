import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import DashboardPage from '../components/DashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/HeaderComponent';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={CreateExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
