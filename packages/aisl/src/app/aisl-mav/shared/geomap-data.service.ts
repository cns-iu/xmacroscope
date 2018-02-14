import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

import { List } from 'immutable';

import { IField, Field, Changes } from '../../dino-core';

import { MessageService, RaceCompletedMessage } from '../../aisl-backend';

// Gender to color mapping
const genderToColorMap = {
  'male': 'blue',
  'female': 'pink',
  'other': 'purple'
};

// Common fields
const commonFields = [
  new Field<string>('color', 'Runner\'s Color', 'string', (item: any): string => {
    return item.persona.color;
  }),
  new Field<string>('gender', 'Runner\'s Gender', 'string', (item: any): string => {
    return item.persona.gender;
  }, (value: any): string => {
    return genderToColorMap[value] || genderToColorMap['other'];
  })
];

// Default fields
const defaultStateFields = [
  new Field<string>('state', 'State', 'string', (item: any): string => {
    return item.persona.state;
  })
];

const defaultStateColorFields = [
  new Field<string>('falseStart', 'False Start', 'string', (item: any): string => {
    return item.falseStart ? 'red' : 'green';
  }),
  new Field<string>('lane', 'Lane', 'string', (item: any): string => {
    switch (item.lane) {
      case 1:
        return 'crimson';

      case 2:
        return 'turquoise';

      default:
        return 'yellow';
    }
  })
];

const defaultPointPositionFields = [
  new Field<[number, number]>('position', 'Point Position', 'number', (item: any): [number, number] => {
    return [item.persona.latitude, item.persona.longitude];
  })
];

const defaultPointSizeFields = [
  new Field<number>('size', 'Point Fixed Size', 'number', (item: any): number => {
    const radius = 5;
    return radius * radius * Math.PI;
  }),
  new Field<number>('timeMillis', 'Point Run Time Size', 'number', (item: any): number => {
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

const defaultPointColorFields = [].concat(
  commonFields,
  defaultStateColorFields
);

// Constants
const maxConcurrentResults = 2;

// Helper functions
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
  readonly stateFields: IField<string>[] = defaultStateFields;
  readonly stateColorFields: IField<string>[] = [].concat(
    commonFields, defaultStateColorFields
  );

  readonly pointDataStream: Observable<Changes>;
  readonly pointPositionFields: IField<[Number, Number]>[] = defaultPointPositionFields;
  readonly pointSizeFields: IField<number>[] = defaultPointSizeFields;
  readonly pointColorFields: IField<string>[] = defaultPointColorFields;

  readonly fields: IField<any>[] = [].concat(
    defaultStateFields, commonFields, defaultStateColorFields,
    defaultPointPositionFields, defaultPointSizeFields
  );

  constructor(private messageService: MessageService) {
    this.stateDataStream = this.pointDataStream = messageService.asObservable().filter((message) => {
      return message instanceof RaceCompletedMessage;
    }).scan(accumulateMessages, List<RaceCompletedMessage>()).map(messagesToChanges);
  }
}
