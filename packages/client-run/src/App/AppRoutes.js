import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupStartPage from '../Start/SignupStartPage';
import Admin from '../Admin/AdminPage';
import NoMatch from '../Pages/NoMatch';
import Runs from '../Runs/Runs';

function AppRoutes() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={SignupStartPage} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/runs" component={Runs} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  );
}

export default AppRoutes;
