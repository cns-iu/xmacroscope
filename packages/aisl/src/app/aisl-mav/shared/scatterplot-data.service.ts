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
import { ChangeTracker } from './change-tracker';

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

@Injectable()
export class ScatterPlotDataService {
  readonly dataStream: Observable<Changes<any>>;
  readonly fields: IField<any>[] = defaultFields;

  constructor(private messageService: MessageService) {
    this.dataStream = new ChangeTracker(messageService.asObservable(), 200).asObservable();
  }
}
