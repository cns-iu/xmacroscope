import { Feature, FeatureCollection, featureCollection, Geometry } from '@turf/helpers';
import { feature } from 'topojson-client';
import { usNameLookup, usTopoJson } from '../shared/us-topojson';


export function getStatesGeoJson(): FeatureCollection<Geometry> {
  const features = feature(usTopoJson, usTopoJson.objects.states).features as Feature<Geometry>[];
  features.forEach(f => {
    if (usNameLookup.hasOwnProperty(f.id)) {
      f.properties.label = usNameLookup[f.id];
    }
  });
  return featureCollection(features);
}

export function getCountiesForStateGeoJson(state: string): FeatureCollection<Geometry> {
  let prefix = state;
  Object.entries(usNameLookup).forEach(([id, name]) => {
    if (name === state) { prefix = id; }
  });
  const geometries = usTopoJson.objects.counties.geometries.filter(g => (g.id as string).indexOf(prefix) === 0);
  const features = feature(usTopoJson,
    { 'type': 'GeometryCollection', geometries }
  ).features as Feature<Geometry>[];
  features.forEach(f => f.properties.label = state);
  return featureCollection(features);
}
