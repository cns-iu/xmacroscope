import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartMutationContainer from '../Start/StartMutationContainer';
import Home from '../Pages/Home';
import NoMatch from '../Pages/NoMatch';

function AppRoutes() {

  return (
    <div className="row">
      <div className="col-10 offset-1">
        <Switch>
          <Route
            exact
            path="/smm"
            render={props => <Home {...props} />}
          />
          <Route exact path="/start" component={StartMutationContainer} />
          <Route component={NoMatch} />
        </Switch>

      </div>
    </div>
  );
}

export default AppRoutes;
