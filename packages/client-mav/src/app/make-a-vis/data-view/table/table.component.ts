import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, Output, OnDestroy } from '@angular/core';
import { DataVariable } from '@dvl-fw/core';
import { Observable, Subscription } from 'rxjs';

import { DataService, DataSource } from '../shared/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() dataSource: DataSource;
  @Input() displayedColumns: DataVariable[] = [];
  @Output() rowClick: Observable<[number, any]> = new EventEmitter();
  selectedId: any;
  displayedColumnNames: string[] = [];

  private subscription: Subscription;
  private mappingKeySelection: string;
  private selectableColumns: {};

  constructor(private dataService: DataService) {
   }

  ngOnChanges(changes: SimpleChanges) {
    this.selectableColumns = this.dataSource.selectableDataVariable;
    if ('displayedColumns' in changes) {
      this.displayedColumnNames = this.displayedColumns.map((ds) => ds.label);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  onRowClick(row: any) {
    if (row && this.selectedId === row.id) {
      this.resetSelection();
    } else {
      this.selectedId = row.id;
      this.dataService.selectRunner([row]);
    }
  }

  resetSelection(): void {
    if (this.selectedId !== undefined) {
      this.selectedId = undefined;
      this.dataService.selectRunner([]);
    }
  }

  isSelectable(dvId: string): boolean {
    if (!this.mappingKeySelection) {
      return false;
    }
    const dataVariables = this.selectableColumns[this.mappingKeySelection];
    if (dataVariables) {
      for (const dataVariable of dataVariables) {
        if (dvId === dataVariable.id) {
          return true;
        }
      }
    }
  }
}
