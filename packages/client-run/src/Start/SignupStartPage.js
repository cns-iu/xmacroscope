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
    activeRun @client {
      opponent
      opponentName
      opponentTime
      runId
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
      zipCode
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
        {({ loading, error, data: { activeRun } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const persona = {
            name: activeRun.name,
            color: activeRun.color,
            icon: activeRun.icon,
            gender: activeRun.gender,
            ageGroup: activeRun.ageGroup,
            favoriteActivity: activeRun.favoriteActivity,
            handedness: activeRun.handedness,
            siblings: activeRun.siblings,
            height: activeRun.height,
            state: activeRun.state,
            zipCode: activeRun.zipCode,
            latitude: activeRun.latitude,
            longitude: activeRun.longitude,
          };

          return (
            <Row>
              {
                activeRun.status !== 'signupForm'
                  ? (
                    <Col xs={12}>
                      <Card body>
                        <Row>
                          <Col xs={6}>
                            <PersonaIcon
                              color={activeRun.color}
                              shape={activeRun.icon}
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
                            opponent={activeRun.opponent}
                            opponentName={activeRun.opponentName}
                            opponentTime={activeRun.opponentTime}
                          />,
                          running: <Running />,
                          postRunTimer: <RunningTimerPost />,
                          falseStart: <div>False start</div>,
                        }[activeRun.status]}
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
