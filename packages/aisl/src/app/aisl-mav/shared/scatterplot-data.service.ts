import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { MessageService } from '../../aisl-backend/shared/message.service';
import { RaceCompletedMessage } from '../../aisl-backend/shared/aisl-messages';
import { IField, Field, Changes } from '../../dino-core';
import { Observable } from 'rxjs/Observable';

const genderToColorMap = {
  'male': 'blue',
  'female': 'pink',
  'other': 'purple'
};

const genderToShapeMap = {
  'male': 'cross',
  'female': 'diamond',
  'other': 'circle'
};

const ageGroupToSizeMap = {
  '07-09': '66',
  '10-12': '77',
  '13-18': '88',
  '19-30': '99',
  '31-40': '110',
  '41-50': '121',
  '51-60': '132',
  '61-70': '143',
  '71+': '154',
  'other': '100'
};

const defaultPositionFields: IField<any>[] = [
  new Field<string>('name', 'Person Name', (item: any): string => {
    return item.persona.name;
  }, undefined, 'string'),
  new Field<number>('timeMillis', 'Person Run Time', (item: any): number => {
    return item.timeMillis;
  }, (value: number) => value / 1000.0, 'number'),
  new Field<number>('timeMillis', 'Avatar Run Time', (item: any): number => {
    return item.avatar.runMillis;
  }, (value: number) => value / 1000.0, 'number')
];

const defaultColorFields = [
  new Field<string>('color', 'Runner\'s Color', (item: any): string => {
    return item.persona.color;
  }, undefined, 'string'),
  new Field<string>('gender', 'Runner\'s Gender', (item: any): string => {
    return item.persona.gender;
  }, (value: any): string => {
    return genderToColorMap[value] || genderToColorMap['other'];
  }, 'string')
];

const defaultShapeFields = [
  new Field<string>('gender', 'Runner\'s Gender Shape', (item: any): string => {
    return item.persona.gender;
  }, (value: any): string => {
    return genderToShapeMap[value] || genderToShapeMap['other'];
  }, 'string')
];

const defaultSizeFields = [
  new Field<string>('age_group', 'Runner\'s Age Group', (item: any): string => {
    return item.persona.age_group;
  }, (value: any): string => {
    return ageGroupToSizeMap[value] || ageGroupToSizeMap['other'];
  }, 'string')];

@Injectable()
export class ScatterPlotDataService {
  xFields: IField<any>[] = defaultPositionFields;
  yFields: IField<any>[] = defaultPositionFields;
  colorFields: IField<string>[] = defaultColorFields;
  shapeFields: IField<string>[] = defaultShapeFields;
  sizeFields: IField<string>[] = defaultSizeFields;
  fields = [].concat(
    defaultPositionFields,
    defaultColorFields,
    defaultShapeFields,
    defaultSizeFields
  );
  dataStream: Observable<Changes<any>>;

  constructor(private messageService: MessageService) {
    this.dataStream = <Observable<Changes<any>>>messageService
      .asBoundedList(1, RaceCompletedMessage).map((messages) => {
        return new Changes(messages.reduce((result, message) => {
          const raceMessage = <RaceCompletedMessage>message;
          raceMessage.results.forEach((race) => {
            race['avatar'] = raceMessage.avatar;
            result.push(race);
          });
          return result;
        }, []));
      });
  }
}
