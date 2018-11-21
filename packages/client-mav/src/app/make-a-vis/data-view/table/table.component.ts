import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, Output } from '@angular/core';
import { DataVariable } from '@dvl-fw/core';
import { Observable } from 'rxjs';

import { DataService, DataSource } from '../shared/data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataSource: DataSource;
  @Input() displayedColumns: DataVariable[] = [];
  @Output() rowClick: Observable<[number, any]> = new EventEmitter();
  selectedIndex: number;
  displayedColumnNames: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if ('displayedColumns' in changes) {
      this.displayedColumnNames = this.displayedColumns.map((ds) => ds.label);
    }
  }

  ngOnInit() {
  }

  onRowClick(index: number) {
    this.selectedIndex = index;
    this.dataService.stopStream();
    const selectedRun = this.dataSource.records[this.dataSource.records.length - 1 - index];
    this.dataService.selectRunner([selectedRun]);
  }

  resetSelection(): void {
    this.selectedIndex = undefined;
  }
}
