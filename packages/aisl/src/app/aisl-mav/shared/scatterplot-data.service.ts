import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { MessageService } from '../../aisl-backend/shared/message.service';
import { RaceCompletedMessage } from '../../aisl-backend/shared/aisl-messages';
import { IField, Field, Changes } from '../../dino-core';
import { Observable } from 'rxjs/Observable';

const fields: IField<any>[] = [
  // new Field<string>('name', 'Person Name', (item: any): string => {
  //   return item.persona.name;
  // }),
  new Field<number>('timeMillis', 'Person Run Time', (item: any): number => {
    return item.timeMillis;
  }, (value: number) => value / 1000.0),
  new Field<number>('timeMillis', 'Avatar Run Time', (item: any): number => {
    return item.avatar.runMillis;
  }, (value: number) => value / 1000.0)
];

@Injectable()
export class ScatterPlotDataService {
  xFields: IField<any>[];
  yFields: IField<any>[];
  fields = fields;
  dataStream: Observable<Changes<any>>;

  constructor(private messageService: MessageService) {
    this.xFields = fields;
    this.yFields = fields;
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
