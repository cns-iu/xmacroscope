import gql from 'graphql-tag';

export const RUN_SELECTED = gql`
  subscription runSelected {
    runSelected {
      type
      timestamp
      avatar {
        id
        name
        runMillis
      }
    }
  }
`;

export const RACE_INITIATED = gql`
  subscription raceInitiated {
    raceInitiated {
      type
      timestamp
      avatar {
        id
        name
        runMillis
      }
    }
  }
`;

export const RACE_COMPLETED = gql`
  subscription raceCompleted {
    raceCompleted {
      type
      timestamp
      avatar {
        id
        name
        runMillis
      }
      results {
        lane
        persona {
          id
          name
          icon
          color
          gender
          age_group
          handedness
          zipcode
          state
          latitude
          longitude
        }
        started
        falseStart
        timeMillis
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation (
    $type: String!
    $timestamp: String!
    $avatar: NewAvatar
    $results: [NewRaceResult]
  ) {
    sendMessage(message: {
      type: $type
      timestamp: $timestamp,
      avatar: $avatar,
      results: $results
    })
  }
`;
