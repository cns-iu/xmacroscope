import { idSymbol } from '@ngx-dino/core';
import { FeatureCollection, Geometry, Feature } from '@turf/helpers';
import { pick, round } from 'lodash';

import { Cartesian2dProjection } from './cartesian-2d-projection';
import { IconConfig, BuiltinSymbolTypes } from './data-driven-icon';
import { Node } from './node';


export class NodesGeojson implements FeatureCollection<Geometry> {
  type: 'FeatureCollection' = 'FeatureCollection';
  features: Feature<Geometry, { [name: string]: any; }>[];

  constructor(nodes: Node[], projection?: Cartesian2dProjection) {
    this.features = nodes.map(n => {
      let coordinates: number[];
      if (projection && n.position) {
        coordinates = projection.toLngLat(...n.position).toArray();
      } else {
        coordinates = [n.longitude, n.latitude];
      }
      const icon: IconConfig = {
        shape: n.shape as BuiltinSymbolTypes,
        areaSize: round(n.areaSize),
        color: n.color,
        transparency: round(n.transparency, 2),
        strokeColor: n.strokeColor,
        strokeWidth: round(n.strokeWidth, 2),
        strokeTransparency: round(n.strokeTransparency, 2),
        pulse: n.pulse || undefined
      };
      return {
        id: n[idSymbol],
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates
        },
        properties: Object.assign({
          icon: `ddi:${JSON.stringify(icon)}`
        }, pick(n, [
          idSymbol, 'size', 'pulse',
          'tooltip', 'label', 'labelPosition'
        ]))
      };
    });
  }
}
