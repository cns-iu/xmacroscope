import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataVariable } from '@dvl-fw/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataSource: any;
  @Input() displayedColumns: DataVariable[] = [];
  displayedColumnNames: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ('displayedColumns' in changes) {
      this.displayedColumnNames = this.displayedColumns.map((ds) => ds.label);
    }
  }

  ngOnInit() {
  }

}
