import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
import { Apollo } from 'apollo-angular';

import { RUN_SELECTED, RACE_INITIATED, RACE_COMPLETED, SEND_MESSAGE} from './graphql-queries';
import { MessageService } from './message.service';

import {
  Persona, Avatar, Message, RunSelectedMessage,
  RaceInitiatedMessage, RaceCompletedMessage, RaceResult
} from 'aisl-api';

@Injectable()
export class GraphQLMessageService {
  runSelected: Observable<RunSelectedMessage>;
  raceInitiated: Observable<RaceInitiatedMessage>;
  raceCompleted: Observable<RaceCompletedMessage>;

  constructor(private messageService: MessageService, private apollo: Apollo) {
    // this.listenForRunSelected();
    // this.listenForRaceInitiated();
    // this.listenForRaceCompleted();
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
