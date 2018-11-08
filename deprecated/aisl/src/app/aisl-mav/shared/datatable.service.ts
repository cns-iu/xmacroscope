import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import {
  Operator, DatumId, Datum, BoundField, RawChangeSet, DataProcessorService,
  DataProcessor, simpleField, ChangeSet
} from '@ngx-dino/core';
import '@ngx-dino/core/src/operators/add/common';

@Injectable()
export class DatatableService {
  public processor: DataProcessor<any, Datum<any>>;
  private pointsChange = new BehaviorSubject<ChangeSet<any>>(new ChangeSet<any>());
  points: Observable<ChangeSet<any>> = this.pointsChange.asObservable();

  constructor(private service: DataProcessorService) { }

  processData(
    stream: Observable<RawChangeSet>,
    idField: BoundField<DatumId>,
    fields: BoundField<any>[]
  ): this {
    const cfield = simpleField({
      label: 'Combined fields',
      operator: Operator.combine<any, any[]>(fields.map((f) => f.operator))
    }).getBoundField();

    const processor = this.processor = this.service.createProcessor(
      stream, idField, {data: cfield}
    );
    this.processor.asObservable().subscribe((change) => this.pointsChange.next(change));

    return this;
  }
}
