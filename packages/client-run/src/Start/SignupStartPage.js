//
// Start kiosk page
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import SignupFormFormik from './SignupFormFormik';
import GET_RUN_STATE_LOCAL from './graphql/GetRaceStateLocal.graphql';
import personActive from './personActive';
import RunnerIcon from './RunnerIcon';

class SignupStartPage extends React.Component {
  render() {
    return (
      <Query query={GET_RUN_STATE_LOCAL}>
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
                      <Row>
                        <RunnerIcon
                          color={activeRun.color}
                          shape={activeRun.icon}
                        />
                        <Col
                          xs={12}
                          className="p-5 text-center"
                        >
                          {{
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

export default SignupStartPage;
