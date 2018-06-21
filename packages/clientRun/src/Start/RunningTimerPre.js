import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import faker from 'faker';
import _ from 'lodash';
import Timer from './Timer';

// Generate persona
// TODO: load these from the signup screen
const fakeShape = _.sample([
  'square',
  'diamond',
  'crossbars',
  'triangle-up',
  'star',
]);

const fakeColor = _.sample([
  'red',
  'orange',
  'yellow',
  'green',
  'indigo',
  'blue',
  'violet',
]);

const fakeGender = _.sample([
  'female',
  'male',
  'other',
]);

const fakeAgeGroup = _.sample([
  '0-6',
  '6-14',
  '15-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65-74',
  '75-85',
  '85+',
]);

const fakeHandedness = _.sample([
  'left',
  'right',
  'ambidextrous',
]);

const persona = {
  name: faker.name.findName(),
  icon: fakeShape,
  color: fakeColor,
  gender: fakeGender,
  age_group: fakeAgeGroup,
  handedness: fakeHandedness,
  zipCode: faker.address.zipCode,
  state: faker.address.state,
};

const GET_PRE_RACE_DELAY = gql`
  query getPreRaceDelay($location: String!) {
    settings(location: $location){
      preRaceDelay
    }
  }
`;

const START_RUN = gql`
  mutation RunStart(
  $run: NewRunRecord!
  ) {
    runStart(
      run: $run
    )
  }
`;

function RunningTimerPre({ opponent }) {
  return (
    <Query
      query={GET_PRE_RACE_DELAY}
      variables={{ location: process.env.REACT_APP_LOCATION }}
    >
      {({ loading, error, data: { settings } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { preRaceDelay } = settings;

        return (
          <Mutation
            mutation={START_RUN}
            update={(cache, { data }) => {
              const createdRunID = data.runStart;
              cache.writeData({
                data: {
                  activeRace: {
                    __typename: 'ActiveRace',
                    raceId: createdRunID,
                    status: 'running',
                  },
                },
              });
            }}
          >
            {runStart => (
              <div>
                <h1>Pre race delay</h1>
                <p>The user has selected an opponent on the start line kiosk
                  and now a timer is running.
                </p>
                <p>Once this timer has completed the race will automatically
                  start.
                </p>
                <Timer
                  completion={() => {
                    runStart({
                      variables: {
                        run: {
                          start: moment(),
                          opponent,
                          persona,
                        },
                      },
                    });
                  }}
                  direction="down"
                  start={preRaceDelay}
                  end={0}
                /> milliseconds
              </div>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
}

export default RunningTimerPre;
