import { FeatureCollection, Geometry, point } from '@turf/helpers';
import { FeatureCollection as FeatureCollection2, Geometry as Geometry2 } from 'geojson';
import dirtyReproject from 'dirty-reprojectors';
import projections from 'dirty-reprojectors/projections';


export function reprojector<T = Geometry>(projection: string,
    geojson: FeatureCollection<T> | FeatureCollection2<Geometry2>,
    reverse = 'mercator'): FeatureCollection<T> {
  const newFeatures: any[] = [];
  for (const feature of geojson.features) {
    feature.geometry = dirtyReproject({
      forward: projection, reverse, projections
    }, feature.geometry);
    if (feature.geometry) {
      newFeatures.push(feature);
    }
  }
  geojson.features = newFeatures;
  return geojson as FeatureCollection<T>;
}
