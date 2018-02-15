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
const defaultFieldSet = new Set<IField<any>>([].concat(
  defaultStateColorFields, defaultPointColorFields,
  defaultPointShapeFields, defaultPointSizeFields
));
const defaultFields = Array.from(defaultFieldSet.values()).sort(({label: label1}, {label: label2}) => {
  if (label1 < label2) {
    return -1;
  } else if (label1 === label2) {
    return 0;
  } else {
    return 1;
  }
});


// Default fields
const defaultStateFields = [
  new Field<string>('state', 'State', (item: any): string => {
    return item.persona.state;
  })
];


const defaultPointPositionFields = [
  new Field<[number, number]>('position', 'Point Position', (item: any): [number, number] => {
    return [item.persona.latitude, item.persona.longitude];
  })
];

const adefaultPointSizeFields = [
  new Field<number>('size', 'Point Fixed Size', (item: any): number => {
    const radius = 5;
    return radius * radius * Math.PI;
  }),
  new Field<number>('timeMillis', 'Point Run Time Size', (item: any): number => {
    const minRadius = 5;
    const maxRadius = 15;
    const minArea = minRadius * minRadius * Math.PI;
    const maxArea = maxRadius * maxRadius * Math.PI;
    const areaDiff = maxArea - minArea;

    const minTime = 2000;
    const maxTime = 10000;
    const timeDiff = maxTime - minTime;
    const timeMillis = Math.min(Math.max(item.timeMillis, minTime), maxTime);
    const timeFactor = (timeMillis - minTime) / timeDiff;

    const area = minArea + areaDiff * timeFactor;
    return area;
  })
];

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

  readonly stateFields: IField<string>[] = defaultStateFields;
  readonly pointPositionFields: IField<[Number, Number]>[] = defaultPointPositionFields;

  readonly fields: IField<any>[] = defaultFields;

  constructor(private messageService: MessageService) {
    this.stateDataStream = this.pointDataStream = messageService.asObservable().filter((message) => {
      return message instanceof RaceCompletedMessage;
    }).scan(accumulateMessages, List<RaceCompletedMessage>()).map(messagesToChanges);
  }
}
