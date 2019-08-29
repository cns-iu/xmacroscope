import {
  SymbolType, symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye
} from 'd3-shape';


// Symbols
export type BuiltinSymbolTypes =
  'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';

const symbolLookup: {[P in BuiltinSymbolTypes]: SymbolType} = {
  'circle': symbolCircle, 'cross': symbolCross, 'diamond': symbolDiamond,
  'square': symbolSquare, 'star': symbolStar, 'triangle': symbolTriangle,
  'wye': symbolWye
};

const defaultSymbol = symbolCircle;

export type CanvasCreator = (width: number, height: number) => HTMLCanvasElement;

export const defaultCanvasCreator: CanvasCreator = function(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export interface IconConfig {
  shape: BuiltinSymbolTypes;

  areaSize: number;

  color: string;
  transparency: number;

  strokeColor: string;
  strokeWidth: number;
  strokeTransparency: number;

  pulse: boolean;
}

export class DataDrivenIcon {
  readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;

  constructor(config: IconConfig, private createCanvas = defaultCanvasCreator) {
    const symbolDiameter = Math.sqrt(config.areaSize / Math.PI) * 2;
    const canvasWidth = symbolDiameter * 2;
    const canvas = this.canvas = this.createCanvas(canvasWidth, canvasWidth);
    const context = this.context = canvas.getContext('2d');

    context.translate(canvas.width / 2, canvas.height / 2);
    context.beginPath();
    (symbolLookup[config.shape] || defaultSymbol).draw(context, config.areaSize);

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
  }

  getImageData(): ImageData {
    return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  toDataUrl(): string {
    return this.canvas.toDataURL();
  }
}
