import {
  Component, Input, Output,
  OnInit, OnChanges,
  SimpleChanges, EventEmitter
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { assign, mapValues, pick, values } from 'lodash';

import { DatumId, BoundField, RawChangeSet } from '@ngx-dino/core';
import { combine } from '@ngx-dino/core/src/operators/methods/grouping/combine';

import * as commonFields from '../shared/common-fields'; // TODO
import * as scatterplotFields from '../shared/scatterplot-fields'; // TODO
import { DataType } from '../shared/data-types';
import { SharedDataService } from '../shared/shared-data.service';
import { DatatableService } from '../shared/datatable.service';

@Component({
  selector: 'aisl-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass'],
  providers: [DatatableService]
})
export class DatatableComponent implements OnInit {
  @Input() dataStream: any[] | Observable<any[]> | Observable<RawChangeSet>;
  @Output() rowClick: Observable<number> = new EventEmitter();

  idField: BoundField<DatumId>;
  dataSource: Observable<DataType[][]>;
  fields: BoundField<DataType>[];

  get columns(): string[] {
    return (this.fields || []).map((f) => f.field.label);
  }

  constructor(
    private sharedService: SharedDataService,
    private datatableService: DatatableService
  ) {
      const combinedFields = assign({}, pick(commonFields, [
        'pointColorFields.default', 'pointShapeFields.default'
        ]), pick(scatterplotFields, [
          'pointIdField',
          'pointSizeFields.default', 'pointPositionFields.default'
        ])
      );

      const combinedBoundFields = mapValues(combinedFields, // mapping to bound fields
        (d: any) => {
          if  (d.default) {
            return d.default.getBoundField();
          } else {
            return d.getBoundField();
          }
        });

      this.fields = values(combinedBoundFields);
      this.idField = combinedBoundFields.pointIdField;

      this.dataStream = this.sharedService.dataStream;
  }

  ngOnInit() {
    this.makeDataSource();
  }

  makeDataSource() {
    const stream = this.normalizeDataStream();
    this.dataSource = this.datatableService.processData(
      stream, this.idField, this.fields
    );
  }

  private normalizeDataStream(): Observable<RawChangeSet> {
    if (Array.isArray(this.dataStream)) {
      return Observable.of(this.dataStream).map(RawChangeSet.fromArray);
    } else {
      return (this.dataStream as Observable<any>).map((data) => {
        return Array.isArray(data) ? RawChangeSet.fromArray(data) : data;
      });
    }
  }

}
