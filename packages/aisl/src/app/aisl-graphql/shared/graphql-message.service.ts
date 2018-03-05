import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { MessageService } from '../../aisl-backend';

import {
  Persona, Avatar, Message, RunSelectedMessage,
  RaceInitiatedMessage, RaceCompletedMessage, RaceResult
} from '../../aisl-backend/shared/models';

const RUN_SELECTED = gql`
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

const RACE_INITIATED = gql`
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

const RACE_COMPLETED = gql`
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

const SEND_MESSAGE = gql`
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

@Injectable()
export class GraphQLMessageService {
  runSelected: Observable<RunSelectedMessage>;
  raceInitiated: Observable<RaceInitiatedMessage>;
  raceCompleted: Observable<RaceCompletedMessage>;

  constructor(private messageService: MessageService, private apollo: Apollo) {
    this.listenForRunSelected();
    this.listenForRaceInitiated();
    this.listenForRaceCompleted();
  }

  send(message: Message) {
    const m: any = Object.assign({}, message, {
      timestamp: moment(message.timestamp).format() // GraphQL timestamp is a String
    });

    this.apollo.mutate({
      mutation: SEND_MESSAGE,
      variables: {
        type: m.type,
        timestamp: m.timestamp,
        avatar: m.avatar,
        results: m.results
      }
    }).subscribe();
  }

  listenForRunSelected() {
    this.runSelected = this.apollo.subscribe({ query: RUN_SELECTED }).map((data) => {
      return new RunSelectedMessage(this.convertTimestamp(data.data.runSelected));
    });
    this.listenForMessage(this.runSelected);
  }
  listenForRaceInitiated() {
    this.raceInitiated = this.apollo.subscribe({ query: RACE_INITIATED }).map((data) => {
      return new RaceInitiatedMessage(this.convertTimestamp(data.data.raceInitiated));
    });
    this.listenForMessage(this.raceInitiated);
  }
  listenForRaceCompleted() {
    this.raceCompleted = this.apollo.subscribe({ query: RACE_COMPLETED }).map((data) => {
      return new RaceCompletedMessage(this.convertTimestamp(data.data.raceCompleted));
    });
    this.listenForMessage(this.raceCompleted);
  }

  private convertTimestamp(message: any): any {
    message.timestamp = moment(message.timestamp).local().toDate();
    return message;
  }
  private listenForMessage(observable: Observable<Message>) {
    observable.subscribe({
      next: (message) => { this.messageService.send(message); },
      error(err: any): void { console.log('err', err); }
    });
  }
}
