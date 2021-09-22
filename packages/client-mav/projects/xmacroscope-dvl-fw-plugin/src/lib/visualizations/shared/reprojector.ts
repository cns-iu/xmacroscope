import { FeatureCollection, Geometry } from '@turf/helpers';
// @ts-ignore
import dirtyReproject from 'dirty-reprojectors';
// @ts-ignore
import projections from 'dirty-reprojectors/projections';
import { FeatureCollection as FeatureCollection2, Geometry as Geometry2 } from 'geojson';


export function reprojector<T = Geometry>(projection: string,
                                          geojson: FeatureCollection<T> | FeatureCollection2<Geometry2>,
                                          reverse = 'mercator'): FeatureCollection<T> {
  const newFeatures: FeatureCollection<T>['features'] = [];
  for (const feature of geojson.features) {
    feature.geometry = (dirtyReproject as (arg1: unknown, arg2: unknown) => T)({
      forward: projection, reverse, projections
    }, feature.geometry);
    if (feature.geometry) {
      newFeatures.push(feature as (typeof newFeatures)[0]);
    }
  }
  geojson.features = newFeatures;
  return geojson as FeatureCollection<T>;
}
