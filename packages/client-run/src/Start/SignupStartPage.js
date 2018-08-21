//
// Start kiosk page
//
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import gql from 'graphql-tag';
import PersonaIcon from '../Signup/PersonaIcon';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import AppState from '../App/AppState';
import SignupFormFormik from './SignupFormFormik';

const GET_RACE_STATE_LOCAL = gql`
  query {
    activeRace @client {
      opponent
      opponentName
      opponentTime
      raceId
      status
      name
      color
      icon
      gender
      age_group
      handedness
      height
      state
      zipcode
      latitude
      longitude
      siblings
    }
  }
`;

class StartPageDev extends React.Component {

  render() {
    return (
      <Query query={GET_RACE_STATE_LOCAL}>
        {({ loading, error, data: { activeRace } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const persona = {
            name: activeRace.name,
            color: activeRace.color,
            icon: activeRace.icon,
            gender: activeRace.gender,
            age_group: activeRace.age_group,
            handedness: activeRace.handedness,
            siblings: activeRace.siblings,
            height: activeRace.height,
            state: activeRace.state,
            zipcode: activeRace.zipcode,
            latitude: activeRace.latitude,
            longitude: activeRace.longitude,
          };

          return (
            <Row>
              {
                activeRace.status !== 'signupForm'
                  ?
                  <Col xs={3}>
                    <Row>
                      <Col>
                        <h1>Remember your shape!</h1>
                        <PersonaIcon
                          color={activeRace.color}
                          shape={activeRace.icon}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h2>Signup</h2>
                        <p>
                          Enter your details:
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <dl className="row">
                          <dt className="col-sm-4">Name</dt>
                          <dd className="col-sm-8">{persona.name}</dd>
                          <dt className="col-sm-4">Icon</dt>
                          <dd className="col-sm-8">{persona.icon}</dd>
                          <dt className="col-sm-4">Gender</dt>
                          <dd className="col-sm-8">{persona.gender}</dd>
                          <dt className="col-sm-4">Age group</dt>
                          <dd className="col-sm-8">{persona.age_group}</dd>
                          <dt className="col-sm-4">Handedness</dt>
                          <dd className="col-sm-8">{persona.handedness}</dd>
                          <dt className="col-sm-4">Siblings</dt>
                          <dd className="col-sm-8">{persona.siblings}</dd>
                          <dt className="col-sm-4">Height</dt>
                          <dd className="col-sm-8">{persona.height}</dd>
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
                  : <Fragment>&nbsp;</Fragment>
              }
              <Col>
                {{
                  signupForm: <SignupFormFormik />,
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
}

export default StartPageDev;
