import { LngLat } from 'mapbox-gl';
import { BBox } from 'geojson';


// tslint:disable-next-line: max-line-length
// See https://github.com/Leaflet/Leaflet/blob/dc6a0ae61a70b1d34f9ee2c4f814bdd21841c774/src/geo/projection/Projection.SphericalMercator.js#L32
const earthRadius = 6378137;
const d = 180 / Math.PI;
function unproject(x: number, y: number): LngLat {
  const lng = x * d / earthRadius;
  const lat = (2 * Math.atan(Math.exp(y / earthRadius)) - (Math.PI / 2)) * d;
  return new LngLat(lng, lat);
}

export class Cartesian2dBounds {
  constructor(
    public minX = Number.MAX_SAFE_INTEGER,
    public maxX = Number.MIN_SAFE_INTEGER,
    public minY = Number.MAX_SAFE_INTEGER,
    public maxY = Number.MIN_SAFE_INTEGER
  ) {}

  extend(x: number, y: number): this {
    this.minX = Math.min(x, this.minX);
    this.maxX = Math.max(x, this.maxX);
    this.minY = Math.min(y, this.minY);
    this.maxY = Math.max(y, this.maxY);
    return this;
  }
}

export class Cartesian2dProjection {
  private mercatorWidth: number;
  private mercatorHeight: number;

  constructor(public sourceBounds: Cartesian2dBounds) {
    const { minX, maxX, minY, maxY } = this.sourceBounds;

    this.mercatorWidth = earthRadius * 2.5;
    this.mercatorHeight = this.mercatorWidth * ((maxY - minY) / (maxX - minX));
    console.log(this.mercatorWidth, this.mercatorHeight);
    console.log(this.getWorldBbox());
  }

  toLngLat(x: number, y: number): LngLat {
    const { minX, maxX, minY, maxY } = this.sourceBounds;
    const { mercatorWidth, mercatorHeight } = this;

    const mercatorX = ((x - minX) / (maxX - minX)) * mercatorWidth - mercatorWidth / 2;
    const mercatorY = ((y - minY) / (maxY - minY)) * -mercatorHeight + mercatorHeight / 2;

    return unproject(mercatorX, mercatorY);
  }

  getWorldBbox(): BBox {
    const { minX, maxX, minY, maxY } = this.sourceBounds;
    const ul = this.toLngLat(minX, minY).toArray();
    const br = this.toLngLat(maxX, maxY).toArray();
    return [ul[0], ul[1], br[0], br[1]];
  }
}
