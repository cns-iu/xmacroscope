//
// Start kiosk page
//
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Col } from 'reactstrap';
import { includes } from 'lodash';
import SignupPreMutation from './SignupStart';
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
            <Fragment>
              {
                includes(['runTimerPre', 'running'], activeRun.status)
                  ? (
                    <Col
                      md={10}
                      xl={6}
                      className="mx-auto d-flex h-50 align-self-end"
                    >
                      <RunnerIcon
                        color={activeRun.color}
                        shape={activeRun.icon}
                      />
                    </Col>
                  )
                  : ''
              }
              {{
                preSignupForm: <SignupPreMutation />,
                signupForm: <SignupFormFormik />,
                runTimerPre: <RunningTimerPre person={person} />,
                running: <Running />,
                postRunTimer: <RunningTimerPost />,
                falseStart: <div>False start</div>,
              }[activeRun.status]}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default SignupStartPage;
