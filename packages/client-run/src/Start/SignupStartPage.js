//
// Start kiosk page
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import { includes } from 'lodash';
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
                <Col xs={12}>
                  <Row>
                    <Col
                      xs={12}
                      className="p-5"
                    >
                      {
                        _.includes(['runTimerPre', 'running'], activeRun.status)
                          ? (
                            <RunnerIcon
                              color={activeRun.color}
                              shape={activeRun.icon}
                            />
                          )
                          : ''
                      }
                    </Col>
                    <Col xs={12}>
                      {{
                        signupForm: <SignupFormFormik />,
                        runTimerPre: <RunningTimerPre person={person} />,
                        running: <Running />,
                        postRunTimer: <RunningTimerPost />,
                        falseStart: <div>False start</div>,
                      }[activeRun.status]}
                    </Col>
                  </Row>
                </Col>
              }
            </Row>
          );
        }}
      </Query>
    );
  }
}

export default SignupStartPage;
