import gql from 'graphql-tag';
import moment, { MomentInput } from 'moment';

import {
  Message, MessageOptions, RunFinishedMessage, RunStartedMessage, SignupFinishedMessage, SignupStartedMessage,
} from '../shared/message';


export const GET_SETTINGS = gql`
  query ($location: String!) {
    Settings(location: $location) {
      location
      usState
      latitude
      longitude
      preRunDelay
      postRunDelay
      startLineTimeout
      runTimeout
      attractDelay
    }
  }
`;

export const RECENT_RUNS = gql`
  query ($lastX: Int) {
    Runs(lastX: $lastX) {
      id
      start
      end
      person {
        id
        icon
        age
        opponent
        shoes
        height
        zipCode
        state
        latitude
        longitude
      }
    }
  }
`;

export const MESSAGE_SUBSCRIPTION = gql`
  subscription messages {
    runMessageSubscription {
      type
      timestamp
      run {
        id
        start
        end
        person {
          id
          icon
          age
          opponent
          shoes
          height
          zipCode
          state
          latitude
          longitude
        }
      }
    }
  }
`;

function asDate(date: MomentInput | null | undefined): Date | undefined {
  return date ? moment(date).local().toDate() : undefined;
}

export function asMessage(messageData: unknown): Message {
  const { type, timestamp, run } = messageData as MessageOptions;
  const data: MessageOptions = {
    type,
    timestamp: asDate(timestamp),
    run
  };

  if (run) {
    run.start = asDate(run.start)!;
    run.end = asDate(run.end)!;
  }

  switch (data.type) {
    case 'signup-started':
      return new SignupStartedMessage(data);
    case 'signup-finished':
      return new SignupFinishedMessage(data);
    case 'run-started':
      return new RunStartedMessage(data);
    case 'run-finished':
      return new RunFinishedMessage(data);
    default:
      return new Message(data);
  }
}
