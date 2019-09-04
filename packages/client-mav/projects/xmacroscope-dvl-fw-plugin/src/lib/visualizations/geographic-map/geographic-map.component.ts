import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { OnGraphicSymbolChange, OnPropertyChange, Visualization, VisualizationComponent } from '@dvl-fw/core';
import { DataProcessorService, Datum, idSymbol, NgxDinoEvent, rawDataSymbol } from '@ngx-dino/core';
import bbox from '@turf/bbox';
import bboxClip from '@turf/bbox-clip';
import clone from '@turf/clone';
import pointsWithinPolygon from '@turf/points-within-polygon';
import { FeatureCollection, Geometry, BBox, featureCollection, Point, Polygon } from '@turf/helpers';
import { isArray } from 'lodash';
import { Map, MapLayerMouseEvent, MapMouseEvent, Point as MapPoint, PointLike, PaddingOptions } from 'mapbox-gl';
import { MapService } from 'ngx-mapbox-gl';
import { EMPTY, Observable, of, Subscription } from 'rxjs';

import { blankStyle } from '../shared/blank-style';
import { DataDrivenIcons } from '../shared/data-driven-icons';
import { GraphicSymbolData, TDatum } from '../shared/graphic-symbol-data';
import { graticule, withAxes } from '../shared/graticule';
import { Node } from '../shared/node';
import { nodesGeoJson } from '../shared/nodes-geojson';
import { reprojector } from '../shared/reprojector';
import { getStatesGeoJson, getCountiesForStateGeoJson } from './../shared/us-geojson';
import { fitBoundsToAspectRatio } from '../shared/fit-bounds-to-aspect-ratio';


// Precompute some geometry
const usGeoJson = reprojector('albersUsa', getStatesGeoJson());
const gridGeoJson5 = reprojector('albersUsa', graticule(5));
const gridGeoJson1 = reprojector('albersUsa', graticule(1));
const grid5 = withAxes(gridGeoJson5);
const worldBbox = bbox(grid5.geojson);

@Component({
  selector: 'mav-geographic-map',
  templateUrl: './geographic-map.component.html',
  styleUrls: ['./geographic-map.component.scss'],
  providers: [MapService]
})
export class GeographicMapComponent implements VisualizationComponent,
    OnDestroy, OnChanges, OnPropertyChange, OnGraphicSymbolChange {
  @Input() data: Visualization;
  featureSelection = 'USA';
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

  worldBbox: BBox = worldBbox;
  worldPadding: PaddingOptions = grid5.padding;
  graticule: FeatureCollection<Geometry> = grid5.geojson;
  nodesGeoJson: FeatureCollection<Point>;
  nodes: TDatum<Node>[];
  nodesSubscription: Subscription;
  basemapGeoJson: FeatureCollection<Geometry> = usGeoJson;

  constructor(private dataProcessorService: DataProcessorService) {}

  private toNgxDinoEvent(event: MapMouseEvent, layers: string[], data: Datum[]): NgxDinoEvent | undefined {
    const bboxMargin = new MapPoint(4, 4);
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
      this.nodesGeoJson = reprojector<Point>('albersUsa', nodesGeoJson(nodes));

      const w = this.map ? this.map.getCanvas().width : 1000;
      const h = this.map ? this.map.getCanvas().height : 1000;
      const viewBox: BBox = [0, 0, w, h];
      const state = this.featureSelection;
      const feature = usGeoJson.features.find(f => f.properties.label === state);

      if (state && state !== 'USA') {
        this.nodesGeoJson = pointsWithinPolygon(this.nodesGeoJson, feature) as FeatureCollection<Point>;
        const featureBounds = fitBoundsToAspectRatio(bbox(feature), viewBox);

        const grid = withAxes(featureCollection(gridGeoJson1.features.map(f =>
          bboxClip(clone(f), featureBounds)
        ).filter(f => !!f.geometry)));

        const featureGeoJson = featureCollection<Polygon>(usGeoJson.features.map(f => {
          const clip = bboxClip<Polygon>(clone(f), featureBounds);
          clip.geometry.coordinates = clip.geometry.coordinates.filter(c => c && c.length > 0);
          return clip.geometry.coordinates.length > 0 ? clip : undefined;
        }).filter(f => !!f));

        const countiesGeoJson = reprojector<Polygon>('albersUsa', getCountiesForStateGeoJson(state));

        this.basemapGeoJson = featureCollection([
          ...featureGeoJson.features,
          ...countiesGeoJson.features
        ])
        this.graticule = grid.geojson;
        this.worldPadding = grid.padding;
        this.worldBbox = fitBoundsToAspectRatio(bbox(this.graticule), viewBox);
      } else {
        this.basemapGeoJson = usGeoJson;
        this.graticule = grid5.geojson;
        this.worldPadding = grid5.padding;
        this.worldBbox = fitBoundsToAspectRatio(bbox(this.graticule), viewBox);
      }
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
    if ('featureSelection' in changes) {
      this.featureSelection = this.data.properties.featureSelection;
      this.refreshNodes();
    }
  }
  getGraphicSymbolData<T>(slot: string, defaults: { [gvName: string]: any } = {}): Observable<TDatum<T>[]> {
    return new GraphicSymbolData(this.dataProcessorService, this.data, slot, defaults).asDataArray();
  }
  ngOnDestroy(): void {
    if (this.nodesSubscription) {
      this.nodesSubscription.unsubscribe();
    }
  }
}
