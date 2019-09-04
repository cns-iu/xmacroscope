import { BBox } from '@turf/helpers';

/**
 * Given a bounding box to be stretched and another bounding box,
 * stretches the first bounding box to have the same aspect ratio as the
 * second such that the content of the first bounding box is centered.
 *
 * @param bounds A bounding box to be stretched
 * @param aspectBounds A bounding box with an aspect ratio to match
 */
export function fitBoundsToAspectRatio(bounds: BBox, aspectBounds: BBox): BBox {
  const [W, H] = [aspectBounds[2] - aspectBounds[0], aspectBounds[3] - aspectBounds[1]];
  const [w, h] = [bounds[2] - bounds[0], bounds[3] - bounds[1]];
  const [minX, minY, maxX, maxY] = bounds;

  const x = (W * h - w * H) / (2 * H);
  if (x < 0) {
    const y = -(H / W) * x;
    return [minX, minY - y, maxX, maxY + y];
  } else {
    return [minX - x, minY, maxX + x, maxY];
  }
}
