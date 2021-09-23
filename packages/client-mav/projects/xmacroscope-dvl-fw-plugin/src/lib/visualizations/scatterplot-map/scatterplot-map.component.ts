import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChange, SimpleChanges, ViewChild,
} from '@angular/core';
import { OnGraphicSymbolChange, OnPropertyChange } from '@dvl-fw/angular';
import { DataType, GraphicSymbol, Visualization, VisualizationComponent } from '@dvl-fw/core';
import { DataProcessorService, Datum, idSymbol, NgxDinoEvent, rawDataSymbol } from '@ngx-dino/core';
import bbox from '@turf/bbox';
import { BBox, FeatureCollection, featureCollection, Geometry, lineString } from '@turf/helpers';
import { extent } from 'd3-array';
import { scaleLinear, scalePoint } from 'd3-scale';
import { isArray, reverse, sortedUniq } from 'lodash';
import { Map, MapLayerMouseEvent, MapMouseEvent, PaddingOptions, Point, PointLike, Style } from 'mapbox-gl';
import { MapService } from 'ngx-mapbox-gl';
import { EMPTY, Observable, of, Subscription } from 'rxjs';

import { XMacroscopeDataService } from '../../shared/xmacroscope-data.service';
import { blankStyle } from '../shared/blank-style';
import { Cartesian2dBounds, Cartesian2dProjection } from '../shared/cartesian-2d-projection';
import { DataDrivenIcons } from '../shared/data-driven-icons';
import { GraphicSymbolData, TDatum } from '../shared/graphic-symbol-data';
import { withAxes } from '../shared/graticule';
import { Node } from '../shared/node';
import { nodesGeoJson } from '../shared/nodes-geojson';


interface ScaleFactory {
  (x: number | string): number | undefined;

  domain?: () => string[];

  ticks?: (count: number) => number[];
  tickFormat?: (count: number) => ((val: number) => string);
}


@Component({
  selector: 'mav-scatterplot-map',
  templateUrl: './scatterplot-map.component.html',
  styleUrls: ['./scatterplot-map.component.scss'],
  providers: [MapService]
})
export class ScatterplotMapComponent implements VisualizationComponent,
  OnDestroy, OnChanges, OnPropertyChange, OnGraphicSymbolChange {
  @Input() data!: Visualization;
  nodeDefaults: { [gvName: string]: unknown } = {
    shape: 'circle',
    areaSize: 16,
    color: '#000',
    transparency: 0
  };
  nodes$: Observable<TDatum<Node>[]> = EMPTY;

  // Outputs
  @Output() readonly nodeClick = new EventEmitter<NgxDinoEvent>();

  // Tooltip element
  @ViewChild('tooltipElement', { static: true }) tooltipElement!: ElementRef<HTMLDivElement>;

  style = blankStyle as Style;
  map!: Map;

  worldBbox!: BBox;
  get worldBbox2d(): [number, number, number, number] {
    return this.worldBbox as [number, number, number, number];
  }
  worldPadding!: PaddingOptions;
  graticule!: FeatureCollection<Geometry>;
  nodesGeoJson!: FeatureCollection<Geometry>;
  nodes: TDatum<Node>[] = [];
  nodesSubscription!: Subscription;

  constructor(private dataProcessorService: DataProcessorService, private xMacroscopeDataService: XMacroscopeDataService) { }

  private toNgxDinoEvent(event: MapMouseEvent, layers: string[], data: Datum[]): NgxDinoEvent | undefined {
    const bboxMargin = new Point(4, 4);
    const pointBox: [PointLike, PointLike] = [event.point.sub(bboxMargin), event.point.add(bboxMargin)];
    const features = this.map.queryRenderedFeatures(pointBox, { layers });
    const itemId = features[0].properties?.[idSymbol];
    const item = data.find(i => i[idSymbol] === itemId);
    if (item) {
      return new NgxDinoEvent(event.originalEvent, item[rawDataSymbol], item, this);
    }
  }

  nodeClicked(event: MapMouseEvent): void {
    const ngxDinoEvent = this.toNgxDinoEvent(event, ['nodes'], this.nodes);
    if (ngxDinoEvent) {
      this.nodeClick.emit(ngxDinoEvent);
    }
    this.tempClickListener(ngxDinoEvent!);
  }

  // FIXME: Remove specifics to xMacroscope
  tempClickListener(event: NgxDinoEvent): void {
    const selection = !event || (event.data as { selected?: boolean }).selected ? [] : [event.data];
    this.xMacroscopeDataService.runStreamController?.selectRuns?.(selection);
  }

  onMouseEnter(event: MapLayerMouseEvent): void {
    this.map.getCanvas().style.cursor = 'pointer';
    const tooltip = event.features?.[0].properties?.tooltip;
    this.showTooltip(event.originalEvent, tooltip);
  }

  onMouseLeave(_event: MapLayerMouseEvent): void {
    this.hideTooltip();
  }

  showTooltip(event: { x: number; y: number }, tooltip: string): void {
    const el = this.tooltipElement.nativeElement;
    const { x, y } = event;
    if (!el || !tooltip) {
      return;
    }

    el.textContent = tooltip;
    el.style.left = `${x - 40}px`;
    el.style.top = `${y - 40}px`;
    el.style.visibility = 'visible';
  }
  hideTooltip(): void {
    const el = this.tooltipElement.nativeElement;
    if (!el) {
      return;
    }

    el.style.visibility = 'hidden';
  }

  onMapLoad(map: Map): void {
    this.map = map;
    this.map.resize();
    new DataDrivenIcons().addTo(map);

    this.ngOnChanges({
      data: new SimpleChange(undefined, this.data, false)
    });
  }

  private layout(nodes?: TDatum<Node>[]): void {
    if (isArray(nodes)) {
      const w = this.map ? this.map.getCanvas().width : 1000;
      const h = this.map ? this.map.getCanvas().height : 1000;

      const gs = this.data.graphicSymbols['points'];
      if (!gs.graphicVariables.x || !gs.graphicVariables.y) {
        nodes = [];
      }

      const xDV = gs.graphicVariables['x'].dataVariable;
      const yDV = gs.graphicVariables['y'].dataVariable;

      const flipX = xDV.dataType !== DataType.NUMBER;
      const xScale = this.getScale(nodes, 'x', gs, flipX ? [w, 0] : [0, w]);
      const yScale = this.getScale(nodes, 'y', gs, [h, 0]);
      for (const node of nodes) {
        node.position = [xScale(node.x as number) ?? 0, yScale(node.y as number) ?? 0];
      }

      const margin = 80;
      const bounds = new Cartesian2dBounds(-margin, w + margin, -margin, h + margin);
      const projection = new Cartesian2dProjection(bounds);
      this.nodes = nodes;
      this.nodesGeoJson = nodesGeoJson(nodes, projection);

      const grid = this.getGrid(xScale, yScale, projection, xDV.label, yDV.label);
      this.graticule = grid.geojson;
      this.worldPadding = grid.padding;
      this.worldBbox = bbox(this.graticule);
    }
  }

  getGrid(
    xScale: ScaleFactory,
    yScale: ScaleFactory,
    projection: Cartesian2dProjection,
    xAxisLabel = '',
    yAxisLabel = ''
  ): { geojson: FeatureCollection<Geometry>; padding: PaddingOptions } {
    const numTicks = 10;
    const xTicks = this.getTicks(xScale, numTicks);
    const yTicks = this.getTicks(yScale, numTicks);

    const { minX, maxX, minY, maxY } = projection.sourceBounds;

    return withAxes(featureCollection<Geometry>([
      ...xTicks.map(t => lineString(
        [
          projection.toLngLat(t.point, minY).toArray(),
          projection.toLngLat(t.point, maxY).toArray()
        ],
        { type: 'grid-line-x', label: t.label }
      )),
      ...yTicks.map(t => lineString(
        [
          projection.toLngLat(minX, t.point).toArray(),
          projection.toLngLat(maxX, t.point).toArray()
        ],
        { type: 'grid-line-y', label: t.label }
      ))
    ]), xAxisLabel, yAxisLabel);
  }

  getTicks(scale: ScaleFactory, numTicks: number): { point: number; label: string }[] {
    if (scale.ticks && scale.tickFormat) {
      const ticks = scale.ticks(numTicks);
      const formatter = scale.tickFormat(numTicks);
      return ticks.map(tick => ({ point: scale(tick) ?? 0, label: formatter(tick) }));
    } else if (scale.domain) {
      const ticks: string[] = scale.domain();
      return ticks.map(label => ({ point: scale(label) ?? 0, label }));
    }
    return [];
  }

  getScale(
    nodes: TDatum<Node>[],
    gvName: string,
    graphicSymbol: GraphicSymbol,
    range: [number, number] = [1000, 0]
  ): ScaleFactory {
    const gv = graphicSymbol.graphicVariables[gvName];
    const getGVValue = (node: TDatum<Node>) =>
      (node as unknown as Record<string, string>)[gvName];

    switch (gv.dataVariable.dataType) {
      case DataType.NUMBER: {
        // const domainL: number[] = extent(nodes, n => +n[gvName]);
        // FIXME: Remove xMacroscope specific customization.
        const domainL: number[] = [0, extent(nodes, node => +getGVValue(node))[1] ?? 0];
        const scaleL = scaleLinear().domain(domainL).nice(10).rangeRound(range);
        return scaleL as unknown as ScaleFactory;
      }

      case DataType.BOOLEAN:
      case DataType.UNKNOWN:
      case DataType.STRING:
      default: {
        const domainP: string[] = reverse(sortedUniq(nodes.map(getGVValue).sort()));
        const scaleP = scalePoint().domain(domainP).padding(0.5).rangeRound(range);
        return scaleP as unknown as ScaleFactory;
      }
    }
  }

  refreshNodes(): void {
    if (this.data) {
      this.nodes$ = this.getGraphicSymbolData<Node>('points', this.nodeDefaults);
    } else {
      this.nodes$ = of([]);
    }
    if (this.nodesSubscription) {
      this.nodesSubscription.unsubscribe();
    }
    this.nodesSubscription = this.nodes$.subscribe(nodes => this.layout(nodes));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      this.refreshNodes();
    }
  }

  dvlOnGraphicSymbolChange(changes: SimpleChanges): void {
    if ('points' in changes) {
      this.refreshNodes();
    }
  }

  dvlOnPropertyChange(changes: SimpleChanges): void {
    if ('pointDefaults' in changes) {
      this.nodeDefaults = this.data.properties.pointDefaults;
      this.refreshNodes();
    }
  }

  getGraphicSymbolData<T>(slot: string, defaults: { [gvName: string]: unknown } = {}): Observable<TDatum<T>[]> {
    return new GraphicSymbolData<T>(this.dataProcessorService, this.data, slot, defaults).asDataArray();
  }

  ngOnDestroy(): void {
    if (this.nodesSubscription) {
      this.nodesSubscription.unsubscribe();
    }
  }
}
