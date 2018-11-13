import {
  Component, Input, Output,
  OnInit, EventEmitter
} from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { DatumId, Field, RawChangeSet, simpleField, idSymbol } from '@ngx-dino/core';
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
  @Output() rowClick: Observable<[number, any]> = new EventEmitter();

  selectedIndex: number;

  data: any = [];
  dataSource: Observable<any[][]>;

  indexField = simpleField<any>({id: 'index', label: ' ', operator: constant<string>('0')});

  showAppHeader = true;

  get columns(): string[] {
    return (this.fields || []).map((f) => f.label);
  }

  constructor(
    private sharedService: SharedDataService,
    private datatableService: DatatableService,
    private route: ActivatedRoute
  ) {
      this.dataStream = this.sharedService.createStream();
      route.queryParams.subscribe((q) => {
        if ('showAppHeader' in q) {
          this.showAppHeader = q['showAppHeader'] === 'true' ? true : false;
        } else if (Object.keys(q).length === 0) {
          this.showAppHeader = true;
        }
      });
  }

  ngOnInit() {
    this.makeDataSource();
  }

  resetSelection(): void {
    this.selectedIndex = undefined;
  }

  makeDataSource(): void {
    const stream = this.normalizeDataStream();

    if (this.fields[0] !== this.indexField) {
      this.fields = [this.indexField].concat(this.fields);
    }

    this.datatableService.processData(
      stream, this.idField.getBoundField('id'),
      this.fields.map(f => f.getBoundField('label') || f.getBoundField())
    );


    this.datatableService.points.subscribe((data) => {
      this.data = this.data.filter((e: any) => !data.remove
        .some((obj: any) => obj[idSymbol] === e[idSymbol])).concat(data.insert.toArray() as any);

      data.update.forEach((el: any) => { // TODO typing for el
        const index = this.data.findIndex((e) => e[idSymbol] === el[idSymbol]);
        if (index !== -1) {
          this.data[index] = Object.assign(this.data[index] || {}, el );
        }
      });

      data.replace.forEach((el: any) => { // TODO typing for el
        const index = this.data.findIndex((e) => e[idSymbol] === el[idSymbol]);
        if (index !== -1) {
          this.data[index] = el;
        }
      });

      this.dataSource = Observable.of(this.data.map((datum) => datum['data']).reverse()
        .map((entry, index) => {
          entry[0] = (index + 1).toLocaleString();
          return entry;
        })
      );
    });
  }

  onClick(index: number): void {
    this.selectedIndex = index;
    const item = this.data.find((d) => parseInt(d.data[0], 10) === index + 1);
    (this.rowClick as EventEmitter<[number, any]>).emit([index, item]);
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
