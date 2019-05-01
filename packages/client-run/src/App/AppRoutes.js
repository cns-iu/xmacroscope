import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignupStartPage from '../Start/SignupStartPage';
import Admin from '../Admin/AdminPage';
import NoMatch from '../Pages/NoMatch';
import Runs from '../Runs/Runs';

function AppRoutes(props) {
  const { settings } = props;
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <SignupStartPage settings={settings} />}
        />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/runs" component={Runs} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  );
}

AppRoutes.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default AppRoutes;
