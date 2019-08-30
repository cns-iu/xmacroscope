import { FeatureCollection, Geometry, point } from '@turf/helpers';
import { FeatureCollection as FeatureCollection2, Geometry as Geometry2 } from 'geojson';
import dirtyReproject from 'dirty-reprojectors';
import projections from 'dirty-reprojectors/projections';


export function reprojector(projection: string,
    geojson: FeatureCollection<Geometry> | FeatureCollection2<Geometry2>,
    reverse = 'mercator'): FeatureCollection<Geometry> {
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
  return geojson as FeatureCollection<Geometry>;
}
