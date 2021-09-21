export interface Node {
  identifier: unknown;
  latitude?: number;
  longitude?: number;
  x?: unknown;
  y?: unknown;
  position?: [number, number];

  color: string;
  strokeColor: string;
  strokeWidth: number;
  areaSize: number;
  transparency: number;
  strokeTransparency: number;
  label: string;
  tooltip: string;
  labelPosition: string;
  shape: string;
  pulse: boolean;
}
