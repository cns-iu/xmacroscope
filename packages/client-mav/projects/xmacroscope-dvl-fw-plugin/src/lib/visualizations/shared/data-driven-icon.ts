import {
  SymbolType, symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye
} from 'd3-shape';
import { round } from 'lodash';


// Symbols
export type BuiltinSymbolTypes =
  'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';

const symbolLookup: {[P in BuiltinSymbolTypes]: SymbolType} = {
  'circle': symbolCircle, 'cross': symbolCross, 'diamond': symbolDiamond,
  'square': symbolSquare, 'star': symbolStar, 'triangle': symbolTriangle,
  'wye': symbolWye
};

const defaultSymbol = symbolCircle;

const defaultPulseColor = '#F1BE48';

export type CanvasCreator = (width: number, height: number) => HTMLCanvasElement;

export const defaultCanvasCreator: CanvasCreator = function(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export class IconConfig {
  shape: BuiltinSymbolTypes | string;

  areaSize: number;

  color: string;
  transparency: number;

  strokeColor: string;
  strokeWidth: number;
  strokeTransparency: number;

  pulse: boolean;
  pulseColor: string;
  pulseWidth: number;

  static asString(data: Partial<IconConfig>): string {
    return new IconConfig(data).toString();
  }

  constructor(data: Partial<IconConfig>) {
    Object.assign(this, data);
    this.normalize();
  }

  normalize(): this {
    Object.assign(this, {
      shape: this.shape,
      areaSize: round(this.areaSize),
      color: this.color || undefined,
      transparency: this.color ? round(this.transparency || 0, 2) : undefined,
      strokeColor: this.strokeColor || undefined,
      strokeWidth: this.strokeColor ? round(this.strokeWidth || 0, 2) : undefined,
      strokeTransparency: this.strokeColor ? round(this.strokeTransparency || 0, 2) : undefined,
      pulse: this.pulse ? true : undefined,
      pulseColor: this.pulse ? this.pulseColor || defaultPulseColor : undefined,
      pulseWidth: this.pulse ? round(this.pulseWidth || 0, 2) || undefined : undefined
    });
    return this;
  }
  toString(): string {
    return `ddi:${JSON.stringify(this)}`;
  }
}

export class DataDrivenIcon {
  readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;

  constructor(public readonly config: IconConfig, private createCanvas = defaultCanvasCreator) {
    const symbolDiameter = Math.sqrt(config.areaSize / Math.PI) * 2;
    if (config.pulse) {
      config.pulseColor = config.pulseColor || config.strokeColor || config.color;
      config.pulseWidth = config.pulseWidth || (symbolDiameter * 2);
    }

    const canvasWidth = (symbolDiameter + (config.pulse ? config.pulseWidth * 2 : 0)) * 2;
    const canvas = this.canvas = this.createCanvas(canvasWidth, canvasWidth);
    this.context = canvas.getContext('2d');
    this.render();
  }

  get isAnimated(): boolean {
    return this.config.pulse;
  }

  render(): boolean {
    const { config, canvas, context } = this;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);

    const shape = symbolLookup[config.shape] || defaultSymbol;

    context.beginPath();
    shape.draw(context, config.areaSize);

    if (config.pulse) {
      const duration = 2000;
      const tick = (performance.now() % duration) / duration;

      context.strokeStyle = config.pulseColor;
      context.fillStyle = config.pulseColor;
      context.lineWidth = (config.strokeWidth || 0) + (config.pulseWidth * tick);
      context.globalAlpha = 1 - tick;
      context.fill();
      context.stroke();
    }
    if (config.color) {
      context.fillStyle = config.color;
      context.globalAlpha = 1 - config.transparency;
      context.fill();
    }
    if (config.strokeColor) {
      context.strokeStyle = config.strokeColor;
      context.lineWidth = config.strokeWidth;
      context.globalAlpha = 1 - config.strokeTransparency;
      context.stroke();
    }
    context.restore();

    return config.pulse;
  }

  getImageData(): ImageData {
    return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  toDataUrl(): string {
    return this.canvas.toDataURL();
  }
}
