import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { OnGraphicSymbolChange, OnPropertyChange } from '@dvl-fw/angular';
import { GraphicSymbol, Visualization, VisualizationComponent } from '@dvl-fw/core';
import { DataProcessorService, NgxDinoEvent, rawDataSymbol } from '@ngx-dino/core';
import { entries, orderBy } from 'lodash';
import { EMPTY, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Run } from '../../shared/run';
import { XMacroscopeDataService } from '../../shared/xmacroscope-data.service';
import { GraphicSymbolData, TDatum } from '../shared/graphic-symbol-data';


interface DataItem {
  identifier: number | string;
  order: number | string;
  pulse: boolean;
  color: string;
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
  @Input() data!: Visualization;

  // Outputs
  @Output() readonly nodeClick = new EventEmitter<NgxDinoEvent>();

  items$: Observable<TDatum<DataItem>[]> = EMPTY;
  columns: { [id: string]: Column } = {};
  displayedColumns: string[] = [];

  constructor(private dataProcessorService: DataProcessorService, private xMacroscopeDataService: XMacroscopeDataService) { }

  getColumns(gs: GraphicSymbol): { [id: string]: Column } {
    const columns: Record<string, Column> = {};
    entries(gs.graphicVariables)
      .filter(([key]) => key !== 'identifier' && key !== 'order' && key !== 'pulse' && key !== 'color')
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
      const location = this.xMacroscopeDataService.config.location;
      this.columns = this.getColumns(this.data.graphicSymbols['items']);
      this.displayedColumns = Object.keys(this.columns);
      if (location === 'null') {
        this.displayedColumns = this.displayedColumns.filter(col => col !== 'zipCode');
      }

      this.items$ = this.getGraphicSymbolData<DataItem>('items').pipe(
        map(items => orderBy(items, 'order', 'asc'))
      );
    } else {
      this.items$ = of([]);
    }
  }

  private toNgxDinoEvent(event: Event, item: TDatum<DataItem>): NgxDinoEvent | undefined {
    if (item) {
      return new NgxDinoEvent(event.type, item[rawDataSymbol], item, this, event);
    }
  }
  rowClicked(event: Event, item: TDatum<DataItem>): void {
    const ngxDinoEvent = this.toNgxDinoEvent(event, item);
    if (ngxDinoEvent) {
      this.nodeClick.emit(ngxDinoEvent);
    }
    this.tempClickListener(ngxDinoEvent!);
  }

  // FIXME: Remove specifics to xMacroscope
  tempClickListener(event: NgxDinoEvent): void {
    const selection = !event || (event.data as Run).selected ? [] : [event.data];
    this.xMacroscopeDataService.runStreamController?.selectRuns?.(selection);
  }

  ngOnInit(): void {
    this.refreshItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      this.refreshItems();
    }
  }

  dvlOnGraphicSymbolChange(changes: SimpleChanges): void {
    if ('items' in changes) {
      this.refreshItems();
    }
  }

  dvlOnPropertyChange(changes: SimpleChanges): void {
    if ('itemDefaults' in changes) {
      this.refreshItems();
    }
  }

  getGraphicSymbolData<T>(slot: string, defaults: { [gvName: string]: unknown } = {}): Observable<TDatum<T>[]> {
    return new GraphicSymbolData<T>(this.dataProcessorService, this.data, slot, defaults).asDataArray();
  }
}
