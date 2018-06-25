import {
  Component, Input, Output,
  OnInit, OnChanges,
  SimpleChanges, EventEmitter
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DatumId, Field, BoundField, RawChangeSet } from '@ngx-dino/core';

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
  @Input() fields: Field<any>[];
  @Output() rowClick: Observable<number> = new EventEmitter();

  idField: BoundField<DatumId>;
  dataSource: Observable<DataType[][]>;

  get columns(): string[] {
    return (this.fields || []).map((f) => f.label);
  }

  constructor(
    private sharedService: SharedDataService,
    private datatableService: DatatableService
  ) {
      this.dataStream = this.sharedService.dataStream;
  }

  ngOnInit() {
    this.makeDataSource();
  }

  makeDataSource() {
    const stream = this.normalizeDataStream();
    this.dataSource = this.datatableService.processData(
      stream, this.idField, this.fields.map(f => f.getBoundField())
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
