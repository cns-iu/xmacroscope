// Adapted from https://github.com/dereklieu/cool-grid/blob/master/index.js
import bbox from '@turf/bbox';
import { Feature, FeatureCollection, featureCollection, Geometry, lineString, point } from '@turf/helpers';
import lineIntersect from '@turf/line-intersect';
import { max } from 'd3-array';
import { PaddingOptions } from 'mapbox-gl';


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
  if (lng >= 180) {
    return 179.999999;
  }
  if (lng <= -180) {
    return -179.999999;
  }
  return lng;
}

function latFix(lat: number) {
  if (lat >= 90) {
    return 89.999999;
  }
  if (lat <= -90) {
    return -89.999999;
  }
  return lat;
}

export function withAxes(
  geojson: FeatureCollection<Geometry>,
  xAxisLabel = 'Longitude (degrees)',
  yAxisLabel = 'Latitude (degrees)'
): { geojson: FeatureCollection<Geometry>; padding: PaddingOptions } {
  type IntersectFeature = Parameters<typeof lineIntersect>[1];

  const [minX, minY, maxX, maxY] = bbox(geojson);

  const axisLineX = lineString(
    [[minX, minY], [minX, maxY]],
    { type: 'axis-line', label: 'X Axis' }
  );
  const axisLineY = lineString(
    [[minX, minY], [maxX, minY]],
    { type: 'axis-line', label: 'Y Axis' }
  );

  const xTicks = geojson.features
    .filter(f => f.properties?.type === 'grid-line-x')
    .map(f => {
      const points = lineIntersect(axisLineY, f as IntersectFeature);
      if (points.features.length > 0) {
        const axisPoint = points.features[0].geometry.coordinates;
        return { point: axisPoint[0], label: f.properties?.label as string };
      }
    }).filter(f => !!f).map(t => point(
      [t?.point ?? 0, minY],
      { type: 'tick-label-x', label: t?.label }
    ));
  const yTicks = geojson.features
    .filter(f => f.properties?.type === 'grid-line-y')
    .map(f => {
      const points = lineIntersect(axisLineX, f as IntersectFeature);
      if (points.features.length > 0) {
        const axisPoint = points.features[0].geometry.coordinates;
        return { point: axisPoint[1], label: f.properties?.label as string };
      }
    }).filter(f => !!f).map(t => point(
      [minX, t?.point ?? 0],
      { type: 'tick-label-y', label: t?.label }
    ));

  const maxYLabelLength = max(yTicks, (d) => d.properties.label?.length ?? 0) ?? 0;

  const features: Feature<Geometry>[] = geojson.features.concat([
    lineString(
      [[maxX, minY], [maxX, maxY]],
      { type: 'grid-line-x', label: 'X Axis' }
    ),
    lineString(
      [[minX, maxY], [maxX, maxY]],
      { type: 'grid-line-y', label: 'Y Axis' }
    ),
    axisLineX,
    axisLineY,
    ...xTicks,
    ...yTicks,
    point(
      [(minX + maxX) / 2, minY],
      { type: 'axis-label-x', label: xAxisLabel || '' }
    ),
    point(
      [minX, (minY + maxY) / 2],
      { type: 'axis-label-y', label: yAxisLabel || '', maxYLabelLength }
    ),
    point(
      [minX, minY],
      { type: 'axis-line-label-x', label: 'X Axis' }
    ),
    point(
      [minX, minY],
      { type: 'axis-line-label-y', label: 'Y Axis' }
    ),
    point(
      [maxX, minY],
      { type: 'axis-line-arrow-x', label: '>' }
    ),
    point(
      [minX, maxY],
      { type: 'axis-line-arrow-y', label: '>' }
      // 1→2⇒3⇛4⇢5⇨6⇾7⟶8⟹9⤍10⤏11⤑12⭢13⭬14⮕15⮚16⮞17⯈18
    ),
  ]);

  return {
    geojson: featureCollection(features),
    padding: { top: 8, right: 8, left: (maxYLabelLength * 8 + 24), bottom: 88 }
  };
}
