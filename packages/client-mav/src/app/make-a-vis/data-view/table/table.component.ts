import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, Output } from '@angular/core';
import { DataVariable } from '@dvl-fw/core';
import { Observable } from 'rxjs';

import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataSource: any;
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
  }

  resetSelection(): void {
    this.selectedIndex = undefined;
  }
}
