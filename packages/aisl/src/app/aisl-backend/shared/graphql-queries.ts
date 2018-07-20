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
          height
          siblings
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

export const RECENT_RUNS = gql`
  query (
    $lastX: Int!
  ) {
    runs(lastX: $lastX){
    id
    opponent
    opponentName
    opponentTime
    start
    end
    PersonId
    Person {
      id
      name
      icon
      color
      gender
      age_group
      handedness
      height
      siblings
      zipcode
      state
      latitude
      longitude
    }
  }
  }
`;

export interface RecentRunRecord {
  id: string;
  opponent: string;
  opponentName: string;
  opponentTime: string;
  start: string;
  end: string;
  PersonId: string;
  Person: {
    id: string;
    name: string;
    icon: string;
    color: string;
    gender: string;
    age_group: string;
    handedness: string;
    height: number;
    siblings: number;
    zipcode: string;
    state: string;
    latitude: number;
    longitude: number;
  };
}
