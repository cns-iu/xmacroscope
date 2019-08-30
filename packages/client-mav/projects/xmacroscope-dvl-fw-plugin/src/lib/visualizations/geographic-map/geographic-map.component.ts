import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { OnGraphicSymbolChange, OnPropertyChange, Visualization, VisualizationComponent } from '@dvl-fw/core';
import { DataProcessorService, Datum, idSymbol, NgxDinoEvent, rawDataSymbol } from '@ngx-dino/core';
import bbox from '@turf/bbox';
import { FeatureCollection, Geometry } from '@turf/helpers';
import { isArray } from 'lodash';
import { Map, MapLayerMouseEvent, MapMouseEvent, Point, PointLike } from 'mapbox-gl';
import { MapService } from 'ngx-mapbox-gl';
import { EMPTY, Observable, of, Subscription } from 'rxjs';

import { blankStyle } from '../shared/blank-style';
import { DataDrivenIcons } from '../shared/data-driven-icons';
import { GraphicSymbolData, TDatum } from '../shared/graphic-symbol-data';
import { graticule, withAxes } from '../shared/graticule';
import { Node } from '../shared/node';
import { NodesGeojson } from '../shared/nodes-geojson';
import { reprojector } from '../shared/reprojector';
import { UsGeojson } from './../shared/us-geojson';


const basemapGeoJson = reprojector('albersUsa', new UsGeojson());
const gridGeoJson = reprojector('albersUsa', graticule(5));
const graticuleGeoJson = withAxes(gridGeoJson);
const worldBbox = bbox(graticuleGeoJson);

@Component({
  selector: 'mav-geographic-map',
  templateUrl: './geographic-map.component.html',
  styleUrls: ['./geographic-map.component.scss'],
  providers: [MapService]
})
export class GeographicMapComponent implements VisualizationComponent,
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

  worldBbox: any = worldBbox;
  graticule: FeatureCollection<Geometry> = graticuleGeoJson;
  nodesGeoJson: NodesGeojson;
  nodes: TDatum<Node>[];
  nodesSubscription: Subscription;
  basemapGeoJson: FeatureCollection<Geometry> = basemapGeoJson;

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
      this.nodes = nodes;
      this.nodesGeoJson = reprojector('albersUsa', new NodesGeojson(nodes));
    }
  }

  refreshNodes(): void {
    if (this.data) {
      this.nodes$ = this.getGraphicSymbolData<Node>('nodes', this.nodeDefaults);
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
    if ('nodes' in changes) { this.refreshNodes(); }
  }
  dvlOnPropertyChange(changes: SimpleChanges): void {
    if ('nodeDefaults' in changes) {
      this.nodeDefaults = this.data.properties.nodeDefaults;
      this.refreshNodes();
    }
  }
  getGraphicSymbolData<T>(slot: string, defaults: { [gvName: string]: any } = {}): Observable<TDatum<T>[]> {
    return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
  }
  ngOnDestroy(): void {

  }
}
