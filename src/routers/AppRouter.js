import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from '../components/DashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/HeaderComponent';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default AppRouter;
