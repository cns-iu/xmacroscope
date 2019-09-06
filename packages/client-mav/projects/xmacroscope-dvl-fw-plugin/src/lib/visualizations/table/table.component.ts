import { IconConfig, DataDrivenIcon } from './../shared/data-driven-icon';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges, OnInit } from '@angular/core';
import { OnGraphicSymbolChange, OnPropertyChange, Visualization, VisualizationComponent, GraphicSymbol, DataType } from '@dvl-fw/core';
import { DataProcessorService } from '@ngx-dino/core';
import { orderBy, uniqBy, isNumber, maxBy, entries } from 'lodash';
import { EMPTY, Observable, of, Subscription } from 'rxjs';

import { GraphicSymbolData, TDatum } from '../shared/graphic-symbol-data';
import { map } from 'rxjs/operators';

interface DataItem {
  identifier: number | string;
  order: number | string;
}
interface Column {
  id: string;
  label: string;
  type: string;
}

@Component({
  selector: 'mav-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements VisualizationComponent,
    OnInit, OnChanges, OnPropertyChange, OnGraphicSymbolChange {
  @Input() data: Visualization;

  items$: Observable<TDatum<DataItem>[]> = EMPTY;
  columns: { [id: string]: Column };
  displayedColumns: string[];

  constructor(private dataProcessorService: DataProcessorService) { }

  getColumns(gs: GraphicSymbol): { [id: string]: Column } {
    const columns = {};
    entries(gs.graphicVariables)
      .filter(([key]) => key !== 'identifier' && key !== 'order')
      .forEach(([id, gv]) => {
        columns[id] = {
          id,
          label: gv.label || gv.dataVariable.label,
          type: gv.type
        };
      });
    return columns;
  }

  refreshItems(): void {
    if (this.data) {
      this.columns = this.getColumns(this.data.graphicSymbols['items']);
      this.displayedColumns = Object.keys(this.columns);
      this.items$ = this.getGraphicSymbolData<DataItem>('items')
        .pipe(map(items => orderBy(items, 'order', 'asc')));
    } else {
      this.items$ = of([]);
    }
  }

  ngOnInit(): void {
    this.refreshItems();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) { this.refreshItems(); }
  }
  dvlOnGraphicSymbolChange(changes: SimpleChanges): void {
    if ('items' in changes) { this.refreshItems(); }
  }
  dvlOnPropertyChange(changes: SimpleChanges): void {
    if ('itemDefaults' in changes) { this.refreshItems(); }
  }
  getGraphicSymbolData<T>(slot: string, defaults: { [gvName: string]: any } = {}): Observable<TDatum<T>[]> {
    return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
  }
}
