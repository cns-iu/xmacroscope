import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { List } from 'immutable';

import { IField, Field, Changes } from '../../dino-core';
import { MessageService, RaceCompletedMessage } from '../../aisl-backend';
import {
  defaultStateColorFields, defaultPointColorFields,
  defaultPointShapeFields, defaultPointSizeFields
} from './geomap-fields';

// Fields
const defaultFields = ([].concat(
  defaultStateColorFields, defaultPointColorFields,
  defaultPointShapeFields, defaultPointSizeFields
) as IField<any>[]).sort(({ label: label1 }, { label: label2 }) => {
  if (label1 < label2) {
    return -1;
  } else if (label1 === label2) {
    return 0;
  } else {
    return 1;
  }
}).reduce(({ current, result }, field) => {
  if (current !== field) {
    current = field;
    result.push(field);
  }

  return { current, result };
}, { current: null, result: [] as IField<any>[] }).result;

// Change tracker
const maxConcurrentResults = 2;

function getStates(messages: RaceCompletedMessage[]): any {
  const results = messages.map((message) => message.results);
  return results.reduce((acc, current) => acc.concat(current), []);
}

function accumulateMessages(acc: List<RaceCompletedMessage>,
  current: RaceCompletedMessage): List<RaceCompletedMessage> {
  const maxSize = maxConcurrentResults + 1;
  const size = acc.size;

  return (size === maxSize ? acc.shift() : acc).push(current);
}

function messagesToChanges(messages: List<RaceCompletedMessage>): Changes {
  const maxSize = maxConcurrentResults + 1;
  const size = messages.size;

  if (size !== maxSize || size <= maxConcurrentResults) {
    return new Changes(getStates(messages.toJS()));
  } else {
    const added = [messages.last()];
    const removed = [messages.first()];

    return new Changes(getStates(added), getStates(removed));
  }
}

@Injectable()
export class GeomapDataService {
  readonly stateDataStream: Observable<Changes>;
  readonly pointDataStream: Observable<Changes>;

  readonly fields: IField<any>[] = defaultFields;

  constructor(private messageService: MessageService) {
    this.stateDataStream = messageService.asObservable().filter((message) => {
      return message instanceof RaceCompletedMessage;
    }).scan(accumulateMessages, List<RaceCompletedMessage>()).map(messagesToChanges);
    this.pointDataStream = messageService.asObservable().filter((message) => {
      return message instanceof RaceCompletedMessage;
    }).scan(accumulateMessages, List<RaceCompletedMessage>()).map(messagesToChanges);
  }
}
