import { idSymbol } from '@ngx-dino/core';
import { FeatureCollection, featureCollection, Point, point } from '@turf/helpers';
import { pick } from 'lodash';

import { Cartesian2dProjection } from './cartesian-2d-projection';
import { IconConfig } from './data-driven-icon';
import { Node } from './node';


export function nodesGeoJson(nodes: Node[], projection?: Cartesian2dProjection): FeatureCollection<Point> {
  return featureCollection(nodes.map(node => {
    const { position, longitude, latitude } = node;
    const projectedLngLat = position && projection?.toLngLat?.(...position);
    const coords: [number, number] = [
      projectedLngLat?.lng ?? longitude ?? 0,
      projectedLngLat?.lat ?? latitude ?? 0
    ];

    return point(coords, {
      icon: IconConfig.asString(node),
      ...pick(node, [idSymbol, 'areaSize', 'tooltip', 'label', 'labelPosition'])
    }, {
      id: (node as unknown as { [idSymbol]: string })[idSymbol]
    });
  }));
}
