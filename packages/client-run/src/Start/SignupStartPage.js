//
// Start kiosk page
//
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Col } from 'reactstrap';
import { includes } from 'lodash';
import PropTypes from 'prop-types';
import SignupPreMutation from './SignupStart';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import SignupFormFormik from './SignupFormFormik';
import GET_RUN_STATE_LOCAL from './graphql/GetRaceStateLocal.graphql';
import RunnerIcon from './RunnerIcon';

class SignupStartPage extends React.Component {
  render() {
    return (
      <Query query={GET_RUN_STATE_LOCAL}>
        {({ loading, error, data: { activeRun } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { runId } = activeRun;
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
                        icon={activeRun.icon}
                      />
                    </Col>
                  )
                  : ''
              }
              {{
                preSignupForm: <SignupPreMutation {...this.props} />,
                signupForm: <SignupFormFormik {...this.props} />,
                runTimerPre: <RunningTimerPre runId={runId} />,
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

SignupStartPage.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default SignupStartPage;
