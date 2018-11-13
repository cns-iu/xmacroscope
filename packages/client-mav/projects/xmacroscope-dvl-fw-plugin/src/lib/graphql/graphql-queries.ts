import gql from 'graphql-tag';
import * as moment_ from 'moment';
const moment = moment_; // See https://github.com/jvandemo/generator-angular2-library/issues/221

import { Message, RunSignupMessage, RunPressedMessage, RunInitiatedMessage, RunCompletedMessage } from '../shared/message';


export const RECENT_RUNS = gql`
  query ($lastX: Int) {
    Runs(lastX: $lastX) {
      id
      start
      end
      person {
        id
        icon
        color
        ageGroup
        favoriteActivity
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
          color
          ageGroup
          favoriteActivity
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
    case 'run-signup':
      return new RunSignupMessage(data);
    case 'run-pressed':
      return new RunPressedMessage(data);
    case 'run-initiated':
      return new RunInitiatedMessage(data);
    case 'run-completed':
      return new RunCompletedMessage(data);
    default:
      return new Message(data);
  }
}
