import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { duration } from 'moment';
import gql from 'graphql-tag';
import Timer from './Timer';

const GET_SETTINGS = gql`
  query settings($location: String!) {
    settings(location: $location){
      location
      latitude
      longitude
      preRaceDelay
      postRaceDelay
      startLineTimeout
      raceTimeout
      attractDelay
    }
  }
`;

class RunningTimerPre extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };

    this.onCompleted = this.onCompleted.bind(this);
  }

  onCompleted() {
    console.log('finished');
  }

  render() {
    const { milliseconds } = this.props;
    console.log(process.env.REACT_APP_LOCATION);
    console.log('----^ ^ ^ ^ ^ process.env.REACT_APP_LOCATION ^ ^ ^ ^ ^----');
    return (
      <Query
        query={GET_SETTINGS}
        variables={{ location: process.env.REACT_APP_LOCATION }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          console.log(data);
          console.log('----^ ^ ^ ^ ^ data ^ ^ ^ ^ ^----');
          return (
            <div>
              <p>Pre race delay</p>
              <p>The user has selected an opponent on the start line kiosk and
                now a timer is running.
              </p>
              <p>Once this timer has completed the race will automatically
                start.
              </p>
              <Timer
                milliseconds={500}
                completion={this.onCompleted}
              /> milliseconds
              {/* <Timer milliseconds={data.settings.preRaceDelay} /> milliseconds */}
            </div>
          );
        }}
      </Query>
    );
  }
}

RunningTimerPre.propTypes = {
  propItem: PropTypes.string,
};

RunningTimerPre.defaultProps = {
  propItem: '',
};

export default RunningTimerPre;
