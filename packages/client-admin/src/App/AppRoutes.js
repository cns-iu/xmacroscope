import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import IntroHeader from '../IntroHeader';
import NoMatch from '../NoMatch';

function AppRoutes() {
  return (
    <Fragment>
      <IntroHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  );
}

export default AppRoutes;
