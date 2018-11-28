import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, Output, OnDestroy } from '@angular/core';
import { DataVariable } from '@dvl-fw/core';
import { Observable } from 'rxjs';

import { DataService, DataSource } from '../shared/data.service';
import { DataVariableHoverService } from '../../shared/services/data-variable-hover.service';
import { Subscription } from 'apollo-client/util/Observable';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() dataSource: DataSource;
  @Input() displayedColumns: DataVariable[] = [];
  @Output() rowClick: Observable<[number, any]> = new EventEmitter();
  selectedIndex: number;
  displayedColumnNames: string[] = [];

  private subscription: Subscription;
  private mappingKeySelection: string[] = [];
  private selectableColumns: {};
  constructor(private dataService: DataService, private hoverService: DataVariableHoverService) {
    this.subscription = hoverService.hovers.subscribe((fields) => {
      this.mappingKeySelection = fields;
    });
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

  onRowClick(index: number) {
    this.selectedIndex = index;
    this.dataService.stopStream();
    const selectedRun = this.dataSource.records[this.dataSource.records.length - 1 - index];
    this.dataService.selectRunner([selectedRun]);
  }

  resetSelection(): void {
    this.selectedIndex = undefined;
    this.dataService.selectRunner([]);
  }

  isSelectable(dvId: string): boolean {
    if (this.mappingKeySelection.length === 0) {
      return false;
    }
    const dataVariables = this.selectableColumns[this.mappingKeySelection[0]];
    if (dataVariables) {
      for (const dataVariable of dataVariables) {
        if (dvId === dataVariable.id) {
          return true;
        }
      }
    }
  }
}
