import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { List } from 'immutable';

import { IField, Changes } from '../../dino-core';
import { MessageService, Message, RaceCompletedMessage, RaceResult } from '../../aisl-backend';
import {
  defaultPointPositionFields,
  defaultPointColorFields,
  defaultPointShapeFields,
  defaultPointSizeFields
} from './scatterplot-fields';

// Fields
const defaultFields = ([].concat(
  defaultPointPositionFields,
  defaultPointColorFields,
  defaultPointShapeFields,
  defaultPointSizeFields
) as IField<any>[]).sort(({ label: label1 }, { label: label2 }) => {
  if (label1 < label2) {
    return -1;
  } else if (label1 === label2) {
    return 0;
  } else {
    return 1;
  }
}).reduce(({ current, result }, field) => {
  if (current === null || current.label !== field.label) {
    current = field;
    result.push(field);
  }

  return { current, result };
}, { current: null, result: [] as IField<any>[] }).result;


class ChangeTracker {
  private readonly mappedStream: Observable<Changes>;
  private accumulator: List<RaceCompletedMessage> = List();

  constructor(private readonly stream: Observable<Message>, public readonly count: number) {
    this.mappedStream = stream.filter((message: Message) => {
      return message instanceof RaceCompletedMessage;
    }).scan((self: ChangeTracker, message: RaceCompletedMessage) => {
      self.accumulateMessage(message);
      return self;
    }, this).map(() => {
      return this.convertMessagesToChanges();
    });
  }

  asObservable(): Observable<Changes> {
    return this.mappedStream;
  }

  private accumulateMessage(message: RaceCompletedMessage): void {
    const maxCount = this.count + 1;
    const currentCount = this.accumulator.size;

    message.results.forEach((r) => {
      r['avatar'] = message.avatar;
      r['raceTimestamp'] = message.timestamp.getTime();
    });

    if (currentCount === maxCount) {
      this.accumulator = this.accumulator.shift();
    }

    this.accumulator = this.accumulator.push(message);
  }

  private convertMessagesToChanges(): Changes {
    const currentCount = this.accumulator.size;
    let removed: RaceResult[] = [];

    if (currentCount > this.count) {
      removed = this.accumulator.first().results;
    }

    return new Changes(this.accumulator.last().results, removed);
  }
}

@Injectable()
export class ScatterPlotDataService {
  readonly dataStream: Observable<Changes<any>>;
  readonly fields: IField<any>[] = defaultFields;

  constructor(private messageService: MessageService) {
    this.dataStream = new ChangeTracker(messageService.asObservable(), 200).asObservable();
  }
}
