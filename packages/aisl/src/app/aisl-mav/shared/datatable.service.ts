import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  Operator, DatumId, Datum, BoundField, RawChangeSet, DataProcessorService,
  DataProcessor, simpleField
} from '@ngx-dino/core';
import '@ngx-dino/core/src/operators/add/common';

@Injectable()
export class DatatableService {
  public processor: DataProcessor<any, Datum<any>>;

  constructor(private service: DataProcessorService) { }

  processData(
    stream: Observable<RawChangeSet>,
    idField: BoundField<DatumId>,
    fields: BoundField<any>[]
  ): Observable<any[][]> {
    const cfield = simpleField({
      label: 'Combined fields',
      operator: Operator.combine<any, any[]>(fields.map((f) => f.operator))
    }).getBoundField();
    const processor = this.processor = this.service.createProcessor(
      stream, idField, {data: cfield}
    );
    return processor.asObservable().map(() => {
      return processor.processedCache.cache.items.valueSeq().reverse()
        .map((datum) => {
          return datum['data'];
        }).toArray();
    });
  }
}
