import { idSymbol } from '@ngx-dino/core';
import { FeatureCollection, featureCollection, Point, point } from '@turf/helpers';
import { pick } from 'lodash';

import { Cartesian2dProjection } from './cartesian-2d-projection';
import { IconConfig } from './data-driven-icon';
import { Node } from './node';


export function nodesGeoJson(nodes: Node[], projection?: Cartesian2dProjection): FeatureCollection<Point> {
  return featureCollection(nodes.map(n =>
    point(
      projection && n.position ? projection.toLngLat(...n.position).toArray() : [n.longitude, n.latitude],
      {
        icon: IconConfig.asString(n),
        ...pick(n, [ idSymbol, 'areaSize', 'tooltip', 'label', 'labelPosition' ])
      },
      { id: n[idSymbol] }
    )
  ));
}
