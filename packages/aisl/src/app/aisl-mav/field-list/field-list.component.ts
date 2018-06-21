import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { BoundField } from '@ngx-dino/core';

@Component({
  selector: 'aisl-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.sass']
})
export class FieldListComponent implements OnInit, OnChanges {
  @Input() fields: BoundField<any>[];

  dataSource: MatTableDataSource<BoundField<any>> = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.fields;
  }

  ngOnChanges(changes: any) {
    this.dataSource.data = this.fields;
  }

}
