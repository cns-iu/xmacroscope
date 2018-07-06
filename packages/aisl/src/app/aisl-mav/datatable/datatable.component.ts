import {
  Component, Input, Output,
  OnInit, EventEmitter
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DatumId, Field, RawChangeSet, simpleField } from '@ngx-dino/core';
import { constant } from '@ngx-dino/core/src/operators/methods/generating/constant';

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
  @Input() idField: Field<DatumId>;
  @Input() fields: Field<any>[];
  @Output() rowClick: Observable<number> = new EventEmitter();

  dataSource: Observable<any[][]>;
  indexField = simpleField<any>({id: 'index', label: ' ', operator: constant<string>('0')});

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
    if (this.fields[0] !== this.indexField) {
      this.fields = [this.indexField].concat(this.fields);
    }
    this.dataSource = this.datatableService.processData(
      stream, this.idField.getBoundField('id'),
      this.fields.map(f => f.getBoundField('label') || f.getBoundField())
    ).map((data) => {
      data.forEach((row, index) => row[0] = (index + 1).toLocaleString());
      return data;
    });
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
