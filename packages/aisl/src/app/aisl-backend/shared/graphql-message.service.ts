import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
import { Apollo } from 'apollo-angular';

import { RUN_SELECTED, RACE_INITIATED, RACE_COMPLETED, SEND_MESSAGE, RECENT_RUNS, RecentRunRecord } from './graphql-queries';
import { MessageService } from './message.service';

import {
  Persona, Avatar, Message, RunSelectedMessage,
  RaceInitiatedMessage, RaceCompletedMessage, RaceResult
} from 'aisl-api';

import { environment } from '../../shared';

@Injectable()
export class GraphQLMessageService {
  initialRunCount = 50;
  runSelected: Observable<RunSelectedMessage>;
  raceInitiated: Observable<RaceInitiatedMessage>;
  raceCompleted: Observable<RaceCompletedMessage>;

  constructor(private messageService: MessageService, private apollo: Apollo) {
    this.listenForRunSelected();
    this.listenForRaceInitiated();
    if (environment.graphqlEndpoint === 'clientdb') {
      this.listenForRaceCompleted();
    } else {
      this.getRecentRuns(this.initialRunCount).subscribe((d) => {
        this.listenForRaceCompleted();
      });
    }
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
  getRecentRuns(lastX: number): Observable<RaceCompletedMessage[]> {
    return this.apollo.watchQuery<{runs: RecentRunRecord[]}>({ query: RECENT_RUNS, variables: {lastX} }).valueChanges.map((data) => {
      return data.data.runs.map(this.runToRaceCompleted);
    }).do((d) => d.forEach((m) => this.messageService.send(m)));
  }
  private runToRaceCompleted(run: RecentRunRecord): RaceCompletedMessage {
    const start = moment(run.start).local().toDate(), end = moment(run.end).local().toDate();
    return new RaceCompletedMessage({
      timestamp: end,
      avatar: {
        id: run.opponent,
        name: run.opponentName,
        runMillis: parseInt(run.opponentTime, 10)
      },
      results: [
        {
          lane: 1,
          persona: run.Person,
          started: true,
          falseStart: false,
          timeMillis: end.getTime() - start.getTime()
        }
      ]
    });
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
