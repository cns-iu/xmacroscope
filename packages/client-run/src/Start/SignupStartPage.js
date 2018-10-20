//
// Start kiosk page
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import DisplayShape from '../Components/DisplayShape';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import SignupFormFormik from './SignupFormFormik';
import GET_RUN_STATE_LOCAL from './graphql/GetRaceStateLocal.graphql';
import personActive from './personActive';

class StartPageDev extends React.Component {
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
                        <Col
                          xs={12}
                          className="p-5"
                        >
                          <DisplayShape
                            color={activeRun.color.hexValue}
                            shape={activeRun.icon}
                            shapeTransform="translate(50, 50) scale(.75)"
                            width="30%"
                            margin="auto"
                          />
                          <Col
                            xs={6}
                            className="p-5 mx-auto"
                          >
                            <h1 className="text-center">
                              Remember your shape and look for it on the graph.
                            </h1>
                          </Col>
                        </Col>
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

export default StartPageDev;
