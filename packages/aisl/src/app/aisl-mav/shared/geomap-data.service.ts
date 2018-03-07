import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { List } from 'immutable';

import { IField, Changes } from '@ngx-dino/core';
import { MessageService, Message, RaceCompletedMessage, RaceResult } from '../../aisl-backend';
import {
  defaultStateColorFields, defaultPointColorFields,
  defaultPointShapeFields
} from './common-fields';
import {
  defaultPointSizeFields, defaultTooltipFields
} from './geomap-fields';
import { ChangeTracker } from './change-tracker';

// Fields
const defaultFields = ([].concat(
  defaultStateColorFields, defaultPointColorFields,
  defaultPointShapeFields, defaultPointSizeFields,
  defaultTooltipFields
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
export class GeomapDataService {
  readonly stateDataStream: Observable<Changes>;
  readonly pointDataStream: Observable<Changes>;

  readonly fields: IField<any>[] = defaultFields;

  constructor(private messageService: MessageService) {
    this.stateDataStream = new ChangeTracker(messageService.asObservable(), 200, 400).asObservable();

    this.pointDataStream = new ChangeTracker(messageService.asObservable(), 200, 400).asObservable();
  }
}
