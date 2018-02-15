import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Changes, IField, Field, FieldProcessor } from '../../dino-core';
import { State } from './state';
import { Point } from './point';
import { lookupStateCode } from './state-lookup';

// Field defaults
const defaultStateField = new Field<string>('state', 'State');
const defaultStateColorField = new Field<string>('color', 'State Coloring');

const defaultPointLatLongField = new Field<[number, number]>(
  'lat_long', 'Latitude,Longitude',
  (data: any): [number, number] => {
    const { latitude = 0, longitude = 0 } = data;
    return [latitude, longitude];
  }, undefined, 'number'
);
const defaultPointSizeField = new Field<number>('size', 'Point Size');
const defaultPointColorField = new Field<string>('color', 'Point Color');
const defaultPointShapeField = new Field<string>('shape', 'Point Shape');

// Computed fields
const computedStateIdField = new Field<number>(
  'id', 'State ANSI Id',
  (data: Partial<State>): number => {
    return data.label ? lookupStateCode(data.label) : 0;
  }, undefined, 'number'
);

const computedPointIdField = new Field<string>(
  'id', 'Computed Point Id',
  (data: Partial<Point>): string => {
    if (!data.latitude || !data.longitude) {
      return '';
    } else {
      return '' + data.latitude + '+' + data.longitude;
    }
  }, undefined, 'string'
);

const computedPointLatitudeField = new Field<number>(
  'latitude', 'Computed Point Latitude',
  (data: Partial<Point>): number => {
    return data.lat_long[0];
  }, undefined, 'number'
);

const computedPointLongitudeField = new Field<number>(
  'longitude', 'Computed Point Longitude',
  (data: Partial<Point>): number => {
    return data.lat_long[1];
  }, undefined, 'number'
);

@Injectable()
export class GeomapDataService {
  private stateProcessor: FieldProcessor<State>;
  private statesChange = new BehaviorSubject<Changes<State>>(new Changes<State>());
  states: Observable<Changes<State>> = this.statesChange.asObservable();

  private pointProcessor: FieldProcessor<Point>;
  private pointsChange = new BehaviorSubject<Changes<Point>>(new Changes<Point>());
  points: Observable<Changes<Point>> = this.pointsChange.asObservable();

  constructor() { }

  initializeStates(
    stream: Observable<Changes> = Observable.of(),
    stateField: IField<string> = defaultStateField,
    stateColorField: IField<string> = defaultStateColorField
  ): this {
    this.stateProcessor = new FieldProcessor<State>(stream, {
      label: stateField,
      color: stateColorField
    }, {
        id: computedStateIdField
      });

    this.stateProcessor.asObservable().subscribe((change) => {
      this.statesChange.next(change);
    });

    return this;
  }

  initializePoints(
    stream: Observable<Changes> = Observable.of(),
    pointLatLongField: IField<[number, number]> = defaultPointLatLongField,
    pointSizeField: IField<number> = defaultPointSizeField,
    pointColorField: IField<string> = defaultPointColorField,
    pointShapeField: IField<string> = defaultPointShapeField
  ): this {
    this.pointProcessor = new FieldProcessor<Point>(stream, {
      lat_long: pointLatLongField,
      size: pointSizeField,
      color: pointColorField,
      shape: pointShapeField
    }, {
        id: computedPointIdField,
        latitude: computedPointLatitudeField,
        longitude: computedPointLongitudeField
      });

    this.pointProcessor.asObservable().subscribe((change) => {
      this.pointsChange.next(change);
    });

    return this;
  }
}
