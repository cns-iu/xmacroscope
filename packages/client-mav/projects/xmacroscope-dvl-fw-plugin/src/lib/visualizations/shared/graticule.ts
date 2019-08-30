// Adapted from https://github.com/dereklieu/cool-grid/blob/master/index.js
import { FeatureCollection, Geometry, lineString, featureCollection, point, Feature } from '@turf/helpers';
import bbox from '@turf/bbox';


export function graticule(interval: number): FeatureCollection<Geometry> {

  interval = +interval || 20;
  const features = [];

  for (let lng = 0; lng <= 180; lng += interval) {
    features.push(lineString(makeMeridian(lng), {
      type: 'grid-line-x',
      label: (lng) ? lng.toString() + '°' : 'Prime meridian'
    }));
    if (lng !== 0) {
      features.push(lineString(makeMeridian(-lng), {
        type: 'grid-line-x',
        label: lng.toString() + '°'
      }));
    }
  }

  for (let lat = 0; lat <= 90; lat += interval) {
    features.push(lineString(makeParallel(lat), {
      type: 'grid-line-y',
      label: (lat) ? lat.toString() + '°' : 'Equator'
    }));
    if (lat !== 0) {
      features.push(lineString(makeParallel(-lat), {
        type: 'grid-line-y',
        label: lat.toString() + '°'
      }));
    }
  }

  return featureCollection(features);
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

function lngFix(lng: number) {
  if (lng >= 180) { return 179.999999; }
  if (lng <= -180) { return -179.999999; }
  return lng;
}

function latFix(lat: number) {
  if (lat >= 90) { return 89.999999; }
  if (lat <= -90) { return -89.999999; }
  return lat;
}

export function withAxes(geojson: FeatureCollection<Geometry>,
    xAxisLabel: string = 'Longitude (degrees)',
    yAxisLabel: string = 'Latitude (degrees)'): FeatureCollection<Geometry> {
  const [minX, minY, maxX, maxY] = bbox(geojson);

  const xTicks = geojson.features
    .filter(f => f.properties.type === 'grid-line-x')
    .map(f => {
      const [tMinX, tMinY, tMaxX, tMaxY] = bbox(f);
      if (tMinY === minY) {
        return {point: tMinX, label: f.properties.label};
      }
    }).filter(f => !!f);
  const yTicks = geojson.features
    .filter(f => f.properties.type === 'grid-line-y')
    .map(f => {
      const [tMinX, tMinY, tMaxX, tMaxY] = bbox(f);
      if (tMinX === minX) {
        return {point: tMaxY, label: f.properties.label};
      }
    }).filter(f => !!f);

  const features: Feature<Geometry>[] = geojson.features.concat([
    lineString([
        [maxX, minY],
        [maxX, maxY]
      ], {
        type: 'grid-line-x',
        label: 'X Axis'
      }),
    lineString([
        [minX, maxY],
        [maxX, maxY]
      ], {
        type: 'grid-line-y',
        label: 'Y Axis'
      }),
    lineString([
        [minX, minY],
        [minX, maxY]
      ], {
        type: 'axis-line',
        label: 'X Axis'
      }),
    lineString([
        [minX, minY],
        [maxX, minY]
      ], {
        type: 'axis-line',
        label: 'Y Axis'
      }),
    ...xTicks.map(t => point(
        [t.point, minY], {
        type: 'tick-label-x',
        label: t.label
      })),
    ...yTicks.map(t => point(
        [minX, t.point], {
        type: 'tick-label-y',
        label: t.label
      })),
    point(
        [(minX + maxX) / 2, latFix(minY - 2)], {
        type: 'axis-label-x',
        label: xAxisLabel || ''
      }),
    point(
        [lngFix(minX - 3), (minY + maxY) / 2], {
        type: 'axis-label-y',
        label: yAxisLabel || ''
      }),
    lineString([
        [lngFix(minX - 4), latFix(maxY + 0.5)],
        [lngFix(maxX + 0.5), latFix(minY - 4)]
      ], {
        type: 'bounds-mark',
        label: 'Bounds Mark'
      })
  ]);

  return featureCollection(features);
}
