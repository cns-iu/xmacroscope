import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { Changes, IField, Field, FieldProcessor } from '../../dino-core';
import { Point } from './point';

@Injectable()
export class ScatterplotDataService {
  private pointProcessor: FieldProcessor<Point>;
  private pointsChange = new BehaviorSubject<Changes<Point>>(new Changes<Point>());
  points: Observable<Changes<Point>> = this.pointsChange.asObservable();

  private streamSubscription: Subscription;

  constructor() { }

  fetchData(stream: Observable<Changes<any>>,
    xField: IField<number | string>,
    yField: IField<number | string>,
    colorField: IField<string>,
    shapeField: IField<string>,
    sizeField: IField<string>): this {
    this.pointProcessor = new FieldProcessor<Point>(stream, {
      x: xField,
      y: yField,
      color: colorField,
      shape: shapeField,
      size: sizeField
    });

    if (this.streamSubscription) {
      this.streamSubscription.unsubscribe();
    }

    this.streamSubscription = this.pointProcessor.asObservable().subscribe((change) => {
      this.pointsChange.next(change);
    });
    return this;
  }
}
