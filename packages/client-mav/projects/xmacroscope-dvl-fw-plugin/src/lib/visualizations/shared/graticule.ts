// From https://github.com/dereklieu/cool-grid/blob/master/index.js
import { FeatureCollection, Geometry } from 'geojson';


export function graticule(interval: number): FeatureCollection<Geometry> {
  interval = +interval || 20;
  const features = [];

  for (let lng = 0; lng <= 180; lng += interval) {
    features.push(makeFeature(makeMeridian(lng), {
      name: (lng) ? lng.toString() + '° E' : 'Prime meridian'
    }));
    if (lng !== 0) {
      features.push(makeFeature(makeMeridian(-lng), {
        name: lng.toString() + '° W'
      }));
    }
  }

  for (let lat = 0; lat <= 90; lat += interval) {
    features.push(makeFeature(makeParallel(lat), {
      name: (lat) ? lat.toString() + '° N' : 'Equator'
    }));
    if (lat !== 0) {
      features.push(makeFeature(makeParallel(-lat), {
        'name': lat.toString() + '° S'
      }));
    }
  }

  return {
    type: 'FeatureCollection',
    features
  };
}

function makeMeridian(lng: number) {
  lng = lngFix(lng);
  const coords = [];
  for (let lat = -90; lat <= 90; lat += 1) {
    coords.push([lng, lat]);
  }
  return coords;
}

function makeParallel(lat: number) {
  const coords = [];
  for (let lng = -180; lng <= 180; lng += 1) {
    coords.push([lngFix(lng), lat]);
  }
  return coords;
}

function makeFeature(coordinates: any[], properties: any) {
  return {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates
    },
    properties
  };
}

function lngFix(lng: number) {
  if (lng >= 180) { return 179.999999; }
  if (lng <= -180) { return -179.999999; }
  return lng;
}
