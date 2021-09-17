import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { OnGraphicSymbolChange, OnPropertyChange } from '@dvl-fw/angular';
import { DataType, GraphicSymbol, Visualization, VisualizationComponent } from '@dvl-fw/core';
import { DataProcessorService } from '@ngx-dino/core';
import { isNumber, maxBy, orderBy, uniqBy } from 'lodash';
import { EMPTY, Observable, of, Subscription } from 'rxjs';

import { GraphicSymbolData, TDatum } from '../shared/graphic-symbol-data';
import { DataDrivenIcon, IconConfig } from './../shared/data-driven-icon';


function areaToDiameter(value: string | number) {
  if (!isNumber(value) || !isFinite(Number(value))) {
    return 1;
  } else {
    return Math.max(1, Math.sqrt(Number(value) / Math.PI) * 2);
  }
}

function valueLabel(o: number | string): string {
  if (isNumber(o)) {
    return Math.round(o).toLocaleString();
  } else {
    return o;
  }
}

class DataItem {
  value: number | string;
  input: number | string;
  label: string;
  order: number;
  icon: string;
  areaSize: number;

  constructor(data: Partial<DataItem & IconConfig>) {
    Object.assign(this, {
      value: data.value,
      input: data.input || data.value,
      label: data.label || data.input || valueLabel(data.value),
      order: data.order || data.input || data.value,
      icon: IconConfig.asString(data),
      areaSize: data.areaSize
    });
  }
}

export interface SummaryStatistics {
  min: DataItem;
  max: DataItem;
  median: DataItem;
}

@Component({
  selector: 'mav-symbol-legend',
  templateUrl: './symbol-legend.component.html',
  styleUrls: ['./symbol-legend.component.scss']
})
export class SymbolLegendComponent implements VisualizationComponent,
    OnDestroy, OnInit, OnChanges, OnPropertyChange, OnGraphicSymbolChange {
  @Input() data: Visualization;
  itemDefaults: { [gvName: string]: any } = {
    shape: 'square',
    areaSize: 196,
    color: '#000',
    transparency: 0,
    strokeColor: null,
    strokeWidth: 1,
    strokeTransparency: 0
  };

  items$: Observable<TDatum<DataItem>[]> = EMPTY;
  itemsSubscription: Subscription;

  items: DataItem[];
  stats: SummaryStatistics;
  maxIconWidth: number;

  private iconCache: { [icon: string]: string } = {};

  constructor(private dataProcessorService: DataProcessorService) { }

  processItems(data: TDatum<DataItem>[]) {
    const items = orderBy(data.map(d => new DataItem(d)), 'order', 'asc')
      .filter(d => d.value !== undefined && (d.label !== 'Visitor' && d.label !== 'Barefoot') /** FIXME: Remove xMac specific cases */);

    const type = this.getLegendType('value', this.data.graphicSymbols.items);
    switch (type) {
      case 'qualitative':
        this.items = uniqBy(items, 'input');
        break;
      case 'quantitative':
        const stats = this.computeSummaryStatistics(items);
        this.items = [stats.min, stats.median, stats.max];
        break;
      default:
        this.items = [];
        break;
    }
    if (this.items.length > 0) {
      const icon = DataDrivenIcon.fromString(maxBy(items, 'areaSize').icon);
      this.maxIconWidth = icon.canvas.width;
    } else {
      this.maxIconWidth = 0;
    }
  }

  getLegendType(gvName: string, graphicSymbol: GraphicSymbol): 'quantitative' | 'qualitative' {
    const gv = graphicSymbol.graphicVariables[gvName];
    switch (gv.dataVariable.dataType) {
      case DataType.NUMBER:
        return 'quantitative';
      case DataType.BOOLEAN:
      case DataType.UNKNOWN:
      case DataType.STRING:
      default:
        return 'qualitative';
    }
  }

  getDataUrl(icon: string): string {
    if (!this.iconCache[icon]) {
      this.iconCache[icon] = DataDrivenIcon.fromString(icon).toDataUrl();
    }
    return this.iconCache[icon];
  }

  private computeSummaryStatistics(data: DataItem[]): SummaryStatistics {
    const min = data.length > 0 ? data[0] : undefined;
    const max = data.length > 0 ? data.slice(-1)[0] : undefined;
    const median = data.length > 0 ? data[Math.floor((data.length - 1) / 2)] : undefined;

    return {min, max, median};
  }

  refreshItems(): void {
    if (this.data) {
      const itemDefaults = Object.assign({}, this.itemDefaults, this.data.properties.itemDefaults);
      this.items$ = this.getGraphicSymbolData<DataItem>('items', itemDefaults);
    } else {
      this.items$ = of([]);
    }
    if (this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
    this.itemsSubscription = this.items$.subscribe(items => this.processItems(items));
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
  ngOnDestroy(): void {
    if (this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }
}
