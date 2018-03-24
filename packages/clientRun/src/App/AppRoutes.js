import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Start from '../Start/Start';
import Home from '../Pages/Home';
import NoMatch from '../Pages/NoMatch';

function AppRoutes() {

  return (
    <div className="row">
      <div className="col-10 offset-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/start" component={Start} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default AppRoutes;
