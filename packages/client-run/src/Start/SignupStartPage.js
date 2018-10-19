//
// Start kiosk page
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col, Card } from 'reactstrap';
import PersonIcon from '../Signup/PersonIcon';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import SignupFormFormik from './SignupFormFormik';
import GET_RACE_STATE_LOCAL from './graphql/GetRaceStateLocal.graphql';
import personActive from './personActive';

class StartPageDev extends React.Component {
  render() {
    return (
      <Query query={GET_RACE_STATE_LOCAL}>
        {({ loading, error, data: { activeRun } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const person = personActive(activeRun);

          return (
            <Row>
              {
                activeRun.status !== 'signupForm'
                  ? (
                    <Col xs={12}>
                      <Card body>
                        <Row>
                          <Col xs={6}>
                            <PersonIcon
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
                            person={person}
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
