import React, { Fragment } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import IntroHeader from '../IntroHeader';
import Home from '../Home';
import NoMatch from '../NoMatch';
import FooterSite from '../FooterSite';
import Research from '../Research';
import Media from '../Media';

function AppRoutes() {
  return (
    <Fragment>
      <BrowserRouter>
        <Fragment>
          <IntroHeader />
          <Switch>
            <Route exact path="/" render={() => (<Home />)} />
            <Route exact path="/research" render={() => (<Research />)} />
            <Route exact path="/media" render={() => (<Media />)} />
            <Route component={NoMatch} />
          </Switch>
          <FooterSite />
        </Fragment>
      </BrowserRouter>
    </Fragment>
  );
}

export default AppRoutes;
