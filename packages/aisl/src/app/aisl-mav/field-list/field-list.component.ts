import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { IField } from '../../dino-core';

@Component({
  selector: 'aisl-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.sass']
})
export class FieldListComponent implements OnInit, OnChanges {
  @Input() fields: IField<any>[];

  dataSource: MatTableDataSource<IField<any>> = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.fields;
  }

  ngOnChanges(changes: any) {
    this.dataSource.data = this.fields;
  }

}
