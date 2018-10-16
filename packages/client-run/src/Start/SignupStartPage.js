//
// Start kiosk page
//
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Row, Col, Card, CardBody } from 'reactstrap';
import gql from 'graphql-tag';
import PersonaIcon from '../Signup/PersonaIcon';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
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
      ageGroup
      favoriteActivity
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
            ageGroup: activeRace.ageGroup,
            favoriteActivity: activeRace.favoriteActivity,
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
                  ? (
                    <Col xs={12}>
                      <Card body>
                        <Row>
                          <Col xs={6}>
                            <PersonaIcon
                              color={activeRace.color}
                              shape={activeRace.icon}
                            />
                            <h2 className="text-center">
                            Remember your shape<br />
                            and<br />
                            look for it<br />
                            on the graph.
                            </h2>
                          </Col>
                          <Col xs={6}>
                            {{
                          signupForm: '',
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
                        </Row>
                      </Card>
                    </Col>
                  )
                  : <SignupFormFormik />
              }
            </Row>
          );
        }}
      </Query>
    );
  }
}

export default StartPageDev;
