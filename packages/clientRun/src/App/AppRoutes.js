import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from '../Start/StartPage';
import Admin from '../Admin/AdminPage';
import Home from '../Pages/Home';
import NoMatch from '../Pages/NoMatch';
import Runs from '../Runs/Runs';

function AppRoutes() {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/start" component={StartPage} />
          <Route exact path="/admin/runs" component={Runs} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default AppRoutes;
