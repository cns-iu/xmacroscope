import gql from 'graphql-tag';
import * as moment_ from 'moment';
const moment = moment_; // See https://github.com/jvandemo/generator-angular2-library/issues/221

import { Message, SignupStartedMessage, SignupFinishedMessage, RunStartedMessage, RunFinishedMessage } from '../shared/message';


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

function asDate(date: any): Date {
  return date ? moment(date).local().toDate() : undefined;
}

export function asMessage(messageData: any): Message {
  const data: any = Object.assign({
    type: messageData.type,
    timestamp: asDate(messageData.timestamp),
    run: messageData.run || undefined
  });
  if (data.run) {
    data.run.start = asDate(data.run.start);
    data.run.end = asDate(data.run.end);
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
