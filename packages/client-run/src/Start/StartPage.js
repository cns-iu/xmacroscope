//
// Start kiosk page
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import gql from 'graphql-tag';
import _ from 'lodash';
import faker from 'faker';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import AppState from '../App/AppState';

const GET_RACE_STATE_LOCAL = gql`
  query {
    activeRace @client {
      opponent
      opponentName
      opponentTime
      raceId
      status
    }
  }
`;

// Generate persona
// TODO: load these from the signup screen
const fakeShape = _.sample([
  'square',
  'diamond',
  'crossbars',
  'triangle-up',
  'star',
]);

const fakeColor = _.sample([
  'red',
  'orange',
  'yellow',
  'green',
  'indigo',
  'blue',
  'violet',
]);

const fakeGender = _.sample([
  'female',
  'male',
  'other',
]);

const fakeAgeGroup = _.sample([
  '0-6',
  '6-14',
  '15-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65-74',
  '75-85',
  '85+',
]);

const fakeHandedness = _.sample([
  'left',
  'right',
  'ambidextrous',
]);

// South Lat
const MIN_LAT = 24.7433195;
// North lat
const MAX_LAT = 49.3457868;
// East long
const MIN_LNG = -66.9513812;
// West long
const MAX_LNG = -124.7844079;

faker.finance.amount(9000,10000,4)
const fakeLat = faker.finance.amount(MIN_LAT, MAX_LAT, 9);
const fakeLong = faker.finance.amount(MIN_LNG, MAX_LNG, 9);

const persona = {
  name: faker.name.findName(),
  icon: fakeShape,
  color: fakeColor,
  gender: fakeGender,
  age_group: fakeAgeGroup,
  handedness: fakeHandedness,
  zipcode: faker.address.zipCode(),
  latitude: fakeLat,
  longitude: fakeLong,
  state: faker.address.state(),
};

// Modify this so that the fake data is regenerated on the state change
function StartPage() {
  return (
    <Query query={GET_RACE_STATE_LOCAL}>
      {({ loading, error, data: { activeRace } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Row>
            <Col xs={3}>
              <Row>
                <Col>
                  <h1>Signup details placeholder</h1>
                  <p>
                    The signup screen is still in development. Currently, we
                    generate fake runner information each time the opponent
                    select screen is generated.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <dl className="row">
                    <dt className="col-sm-4">Name</dt>
                    <dd className="col-sm-8">{persona.name}</dd>
                    <dt className="col-sm-4">Color</dt>
                    <dd className="col-sm-8">{persona.color}</dd>
                    <dt className="col-sm-4">Icon</dt>
                    <dd className="col-sm-8">{persona.icon}</dd>
                    <dt className="col-sm-4">Gender</dt>
                    <dd className="col-sm-8">{persona.gender}</dd>
                    <dt className="col-sm-4">Age group</dt>
                    <dd className="col-sm-8">{persona.age_group}</dd>
                    <dt className="col-sm-4">Handedness</dt>
                    <dd className="col-sm-8">{persona.handedness}</dd>
                    <dt className="col-sm-4">State</dt>
                    <dd className="col-sm-8">{persona.state}</dd>
                    <dt className="col-sm-4">Zip Code</dt>
                    <dd className="col-sm-8">{persona.zipcode}</dd>
                    <dt className="col-sm-4">Latitude</dt>
                    <dd className="col-sm-8">{persona.latitude}</dd>
                    <dt className="col-sm-4">Longitude</dt>
                    <dd className="col-sm-8">{persona.longitude}</dd>
                  </dl>
                </Col>
              </Row>
            </Col>
            <Col>
              {{
                opponentSelect: <OpponentSelect />,
                runTimerPre: <RunningTimerPre
                  persona={persona}
                  opponent={activeRace.opponent}
                  opponentName={activeRace.opponentName}
                  opponentTime={activeRace.opponentTime}
                />,
                running: <Running />,
                postRunTimer: <RunningTimerPost />,
                falseStart: <div>False start</div>,
              }[activeRace.status]}
            </Col>
            <Col xs={3}>
              <AppState activeRace={activeRace} />
            </Col>
          </Row>
        );
      }}
    </Query>
  );
}

export default StartPage;
