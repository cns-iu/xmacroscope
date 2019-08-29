import { FeatureCollection, Geometry } from 'geojson';
import dirtyReproject from 'dirty-reprojectors';
import projections from 'dirty-reprojectors/projections';


export function reprojector(projection: string, geojson: FeatureCollection<Geometry>): FeatureCollection<Geometry> {
  for (const feature of geojson.features) {
    feature.geometry = dirtyReproject({
      forward: projection,
      reverse: 'mercator',
      projections
    }, feature.geometry);
  }
  return geojson;
}
