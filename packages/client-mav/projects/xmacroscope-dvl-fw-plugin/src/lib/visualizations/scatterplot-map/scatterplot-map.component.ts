import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { DataType, GraphicSymbol, OnGraphicSymbolChange, OnPropertyChange, Visualization, VisualizationComponent } from '@dvl-fw/core';
import { DataProcessorService, Datum, idSymbol, NgxDinoEvent, rawDataSymbol } from '@ngx-dino/core';
import { extent } from 'd3-array';
import { scaleLinear, scalePoint } from 'd3-scale';
import { isArray, reverse, sortedUniq } from 'lodash';
import { Map, MapLayerMouseEvent, MapMouseEvent, Point, PointLike } from 'mapbox-gl';
import { MapService } from 'ngx-mapbox-gl';
import { EMPTY, Observable, of, Subscription } from 'rxjs';
import { featureCollection, lineString, FeatureCollection, Geometry, BBox, point, multiLineString } from '@turf/helpers';

import { blankStyle } from '../shared/blank-style';
import { Cartesian2dBounds, Cartesian2dProjection } from '../shared/cartesian-2d-projection';
import { DataDrivenIcons } from '../shared/data-driven-icons';
import { GraphicSymbolData, TDatum } from '../shared/graphic-symbol-data';
import { graticule } from '../shared/graticule';
import { Node } from '../shared/node';
import { NodesGeojson } from '../shared/nodes-geojson';
import bbox from '@turf/bbox';


const graticuleGeoJson = graticule(5);

@Component({
  selector: 'mav-scatterplot-map',
  templateUrl: './scatterplot-map.component.html',
  styleUrls: ['./scatterplot-map.component.scss'],
  providers: [MapService]
})
export class ScatterplotMapComponent implements VisualizationComponent,
    OnDestroy, OnChanges, OnPropertyChange, OnGraphicSymbolChange {
  @Input() data: Visualization;
  nodeDefaults: { [gvName: string]: any } = {
    shape: 'circle',
    areaSize: 16,
    color: '#000',
    transparency: 0
  };
  nodes$: Observable<TDatum<Node>[]> = EMPTY;

  // Outputs
  @Output() nodeClick = new EventEmitter<NgxDinoEvent>();

  // Tooltip element
  @ViewChild('tooltipElement', {static: true}) tooltipElement: ElementRef<HTMLDivElement>;

  style = blankStyle;
  map: Map;

  worldBbox: BBox;
  graticule: FeatureCollection<Geometry> = graticuleGeoJson as FeatureCollection<Geometry>;
  nodesGeoJson: FeatureCollection<Geometry>;
  nodes: TDatum<Node>[];
  nodesSubscription: Subscription;

  constructor(private dataProcessorService: DataProcessorService) {}

  private toNgxDinoEvent(event: MapMouseEvent, layers: string[], data: Datum[]): NgxDinoEvent | undefined {
    const bboxMargin = new Point(4, 4);
    const pointBox: [PointLike, PointLike] = [ event.point.sub(bboxMargin), event.point.add(bboxMargin) ];
    const features = this.map.queryRenderedFeatures(pointBox, {layers});
    const itemId = features[0].properties[idSymbol];
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
  }

  onMouseEnter(event: MapLayerMouseEvent): void {
    this.map.getCanvas().style.cursor = 'pointer';
    const tooltip = event.features[0].properties.tooltip;
    this.showTooltip(event.originalEvent, tooltip);
  }
  onMouseLeave(event: MapLayerMouseEvent): void {
    this.hideTooltip();
  }
  showTooltip(event: any, tooltip: string): void {
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

  onMapLoad(map: Map) {
    this.map = map;
    this.map.resize();
    new DataDrivenIcons().addTo(map);

    this.ngOnChanges({ data: { currentValue: this.data } as SimpleChange});
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
        node.position = [xScale(node.x), yScale(node.y)];
      }

      const margin = 120;
      const bounds = new Cartesian2dBounds(-margin, w + margin, -margin, h + margin);
      const projection = new Cartesian2dProjection(bounds);
      this.nodes = nodes;
      this.nodesGeoJson = new NodesGeojson(nodes, projection) as any;
      this.graticule = this.getGrid(xScale, yScale, projection, xDV.label, yDV.label);
      this.worldBbox = bbox(this.graticule);
    }
  }

  getGrid(xScale: (x: any) => number | undefined,
      yScale: (x: any) => number | undefined,
      projection: Cartesian2dProjection,
      xAxisLabel?: string,
      yAxisLabel?: string): FeatureCollection<Geometry> {
    const numTicks = 10;
    const xTicks = this.getTicks(xScale, numTicks);
    const yTicks = this.getTicks(yScale, numTicks);

    const { minX, maxX, minY, maxY } = projection.sourceBounds;

    return featureCollection<Geometry>([
      ...xTicks.map(t => lineString([
          projection.toLngLat(t.point, minY).toArray(),
          projection.toLngLat(t.point, maxY).toArray()
        ], {
          type: 'grid-line',
          label: t.label
        })),
      ...yTicks.map(t => lineString([
          projection.toLngLat(minX, t.point).toArray(),
          projection.toLngLat(maxX, t.point).toArray()
        ], {
          type: 'grid-line',
          label: t.label
        })),
      lineString([
          projection.toLngLat(maxX, minY).toArray(),
          projection.toLngLat(maxX, maxY).toArray()
        ], {
          type: 'grid-line',
          label: 'X Axis'
        }),
      lineString([
          projection.toLngLat(minX, minY).toArray(),
          projection.toLngLat(maxX, minY).toArray()
        ], {
          type: 'grid-line',
          label: 'Y Axis'
        }),
      lineString([
          projection.toLngLat(minX, minY).toArray(),
          projection.toLngLat(minX, maxY).toArray()
        ], {
          type: 'axis-line',
          label: 'X Axis'
        }),
      lineString([
          projection.toLngLat(minX, maxY).toArray(),
          projection.toLngLat(maxX, maxY).toArray()
        ], {
          type: 'axis-line',
          label: 'Y Axis'
        }),
      ...xTicks.map(t => point(
          projection.toLngLat(t.point, maxY).toArray(), {
          type: 'tick-label-x',
          label: t.label
        })),
      ...yTicks.map(t => point(
          projection.toLngLat(minX, t.point).toArray(), {
          type: 'tick-label-y',
          label: t.label
        })),
      point(
          projection.toLngLat((minX + maxX) / 2, maxY + 70).toArray(), {
          type: 'axis-label-x',
          label: xAxisLabel || ''
        }),
      point(
          projection.toLngLat(minX - 80, (minY + maxY) / 2).toArray(), {
          type: 'axis-label-y',
          label: yAxisLabel || ''
        }),
      lineString([
          projection.toLngLat(minX - 240, maxY + 140).toArray(),
          projection.toLngLat(maxX + 10, minY - 10).toArray()
        ], {
          type: 'bounds-mark',
          label: 'Bounds Mark'
        })
    ]);
  }

  getTicks(scale: any, numTicks: number): {point: number, label: string}[] {
    if ('ticks' in scale && 'tickFormat' in scale) {
      const ticks: number[] = scale.ticks(numTicks);
      const formatter = scale.tickFormat(numTicks);
      return ticks.map(tick => {
        return {point: scale(tick), label: formatter(tick)};
      });
    } else if ('domain' in scale) {
      const ticks: string[] = scale.domain();
      return ticks.map(label => {
        return {point: scale(label), label};
      });
    }
    return [];
  }

  getScale(nodes: TDatum<Node>[], gvName: string, graphicSymbol: GraphicSymbol,
      range: [number, number] = [1000, 0]): (x: any) => number | undefined {
    const gv = graphicSymbol.graphicVariables[gvName];
    switch (gv.dataVariable.dataType) {
      case DataType.NUMBER:
        const domainL: number[] = extent(nodes, n => +n[gvName]);
        const scaleL = scaleLinear().domain(domainL).nice(10).rangeRound(range);
        return scaleL;
      case DataType.BOOLEAN:
      case DataType.UNKNOWN:
      case DataType.STRING:
      default:
        const domainP: string[] = reverse(sortedUniq(nodes.map(n => n[gvName]).sort()));
        const scaleP = scalePoint().domain(domainP).padding(0.5).rangeRound(range);
        return scaleP;
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
    if ('data' in changes) { this.refreshNodes(); }
  }
  dvlOnGraphicSymbolChange(changes: SimpleChanges): void {
    if ('points' in changes) { this.refreshNodes(); }
  }
  dvlOnPropertyChange(changes: SimpleChanges): void {
    if ('pointDefaults' in changes) {
      this.nodeDefaults = this.data.properties.pointDefaults;
      this.refreshNodes();
    }
  }
  getGraphicSymbolData<T>(slot: string, defaults: { [gvName: string]: any } = {}): Observable<TDatum<T>[]> {
    return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
  }
  ngOnDestroy(): void {

  }
}
