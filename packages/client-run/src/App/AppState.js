import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Card, CardTitle } from 'reactstrap';
import '../Styles/AppState.css';

function AppState({ activeRace }) {
  const raceState = Object.entries(activeRace).map(([key, value]) => (
    <Fragment key={key}>
      <dt className="col-sm-5 text-right">{key}</dt>
      <dd className="col-sm-7">{value}</dd>
    </Fragment>
  ));

  return (
    <Card body outline color="secondary">
      <CardTitle>Local app state</CardTitle>
      <dl className="row">{raceState}</dl>
    </Card>
  );
}

AppState.propTypes = {
  activeRace: PropTypes.object.isRequired,
};

export default AppState;
