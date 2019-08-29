import { FeatureCollection, Geometry, Feature } from 'geojson';
import { usTopoJson } from '../shared/us-topojson';
import { feature, mesh } from 'topojson-client';

function asFeature(geometry: Geometry, properties: any = {}): Feature {
  return { type: 'Feature', geometry, properties };
}

export class UsGeojson implements FeatureCollection<Geometry> {
  type: 'FeatureCollection' = 'FeatureCollection';
  features: Feature<Geometry, { [name: string]: any; }>[];
  constructor() {
    const counties = feature(usTopoJson, usTopoJson.objects.counties).features;
    const states = feature(usTopoJson, usTopoJson.objects.states).features;
    // const states = [asFeature(mesh(usTopoJson, usTopoJson.objects.states, function(a, b) { return a.id !== b.id; }))];
    // const nation = feature(usTopoJson, usTopoJson.objects.nation).features;
    const nation = [asFeature(mesh(usTopoJson, usTopoJson.objects.nation))];

    // this.features = [
    //   asFeature(counties),
    //   asFeature(states),
    //   ...nation
    // ];
    this.features = [
      //...counties,
      ...states,
      // ...nation
    ];
  }
}
