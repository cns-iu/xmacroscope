import {
  SymbolType, symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye
} from 'd3-shape';
import { round } from 'lodash';


// Symbols
export type BuiltinSymbolTypes =
  'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';

const symbolLookup: { [P in BuiltinSymbolTypes]: SymbolType } = {
  'circle': symbolCircle, 'cross': symbolCross, 'diamond': symbolDiamond,
  'square': symbolSquare, 'star': symbolStar, 'triangle': symbolTriangle,
  'wye': symbolWye
};

const defaultSymbol = symbolCircle;

const defaultPulseColor = '#F1BE48';

export type CanvasCreator = (width: number, height: number) => HTMLCanvasElement;

export const defaultCanvasCreator: CanvasCreator = function (width, height) {
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
    Object.assign(this, {
      shape: data.shape,
      areaSize: round(data.areaSize),
      color: data.color || undefined,
      transparency: data.color ? round(data.transparency || 0, 2) : undefined,
      strokeColor: data.strokeColor || undefined,
      strokeWidth: data.strokeColor ? round(data.strokeWidth || 0, 2) : undefined,
      strokeTransparency: data.strokeColor ? round(data.strokeTransparency || 0, 2) : undefined,
      pulse: data.pulse ? true : undefined,
      pulseColor: data.pulse ? data.pulseColor || defaultPulseColor : undefined,
      pulseWidth: data.pulse ? round(data.pulseWidth || 0, 2) || undefined : undefined
    });
  }

  toString(): string {
    return `ddi:${JSON.stringify(this)}`;
  }
}

export class DataDrivenIcon {
  readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;

  private imageDrawn: boolean;
  private imageSent: boolean;

  static fromString(icon: string, prefix = 'ddi:', createCanvas = defaultCanvasCreator): DataDrivenIcon {
    if (icon.startsWith(prefix)) {
      const config = JSON.parse(icon.slice(prefix.length));
      return new DataDrivenIcon(config, createCanvas);
    }
  }

  constructor(public readonly config: IconConfig, private createCanvas = defaultCanvasCreator) {
    const symbolDiameter = Math.sqrt(config.areaSize) * 2;
    let canvasWidth = symbolDiameter + 4;
    // FIXME: Remove xMacroscope specific code
    if (config.shape && !symbolLookup[config.shape]) {
      canvasWidth *= 1.75;
    }
    if (config.strokeWidth) {
      canvasWidth += config.strokeWidth;
    }
    if (config.pulse) {
      config.pulseColor = config.pulseColor || config.strokeColor || config.color;
      config.pulseWidth = config.pulseWidth || (symbolDiameter * 2);
      canvasWidth += config.pulseWidth * 3;
    }

    const canvas = this.canvas = this.createCanvas(canvasWidth, canvasWidth);
    this.context = canvas.getContext('2d');
    this.render();
  }

  get isAnimated(): boolean {
    return this.config.pulse || (this.hasImageShape && !this.imageSent);
  }

  get hasImageShape(): boolean {
    return this.config.shape && (this.config.shape.startsWith('data:') || this.config.shape.startsWith('http'));
  }

  render(): boolean {
    const { config, canvas, context, hasImageShape } = this;

    if (!hasImageShape || config.pulse) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    context.save();

    context.translate(canvas.width / 2, canvas.height / 2);
    context.beginPath();

    const shape = symbolLookup[config.shape] || defaultSymbol;
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
    if (hasImageShape) {
      if (this.imageDrawn) {
        setTimeout(() => this.imageSent = true, 10);
      } else {
        const symbolRadius = Math.sqrt(config.areaSize)
                                  * 1.75; // FIXME: Remove xMacroscope specific code
        const [x, y, w, h] = [canvas.width / 2 - symbolRadius, canvas.height / 2 - symbolRadius, symbolRadius * 2, symbolRadius * 2];
        const image = new Image();
        this.imageDrawn = false;
        this.imageSent = false;
        image.onload = () => {
          context.save();
          context.globalCompositeOperation = 'source-over';

          /* FIXME: Uncomment to remove xMacroscope specific code
          if (config.color) {
            // Draw a color rect
            context.fillStyle = config.color;
            context.globalAlpha = 1 - config.transparency;
            context.beginPath();
            context.rect(0, 0, canvas.width, canvas.height);
            context.fill();

            context.globalCompositeOperation = 'destination-in';
          }
          */

          context.globalAlpha = 1;
          context.drawImage(image, x, y, w, h);

          if (config.strokeColor) {
            context.globalCompositeOperation = 'source-over';
            const sw = config.strokeWidth;
            context.strokeStyle = config.strokeColor;
            context.globalAlpha = 1 - config.strokeTransparency;
            context.beginPath();
            context.rect(x - sw, y - sw, w + 2 * sw, h + 2 * sw);
            context.stroke();
          }

          this.imageDrawn = true;
          context.restore();
        };
        image.src = config.shape;
      }
    } else {
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
    context.restore();

    return this.isAnimated;
  }

  getImageData(): ImageData {
    return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  toDataUrl(): string {
    return this.canvas.toDataURL();
  }
}
