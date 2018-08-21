import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPageDev from '../Start/StartPageDev';
import SignupStartPage from '../Start/SignupStartPage';
import Admin from '../Admin/AdminPage';
import NoMatch from '../Pages/NoMatch';
import Runs from '../Runs/Runs';

function AppRoutes() {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <Switch>
          <Route exact path="/" component={SignupStartPage} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/start-dev" component={StartPageDev} />
          <Route exact path="/admin/runs" component={Runs} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default AppRoutes;
