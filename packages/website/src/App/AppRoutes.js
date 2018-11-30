import React, { Fragment } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from '../Home';
import FooterSite from '../FooterSite';
import NoMatch from '../NoMatch';
import Publications from '../Publications';
import AppNav from '../AppNav';

function AppRoutes() {
  return (
    <Fragment>
      <main>
        <AppNav />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (<Home />)}
            />
            <Route
              exact
              path="/publications"
              render={() => (<Publications />)}
            />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </main>
      <FooterSite />
    </Fragment>
  );
}

export default AppRoutes;
