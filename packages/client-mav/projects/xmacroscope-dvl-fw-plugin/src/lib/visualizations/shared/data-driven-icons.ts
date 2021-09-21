import { Map } from 'mapbox-gl';
import { DataDrivenIcon, defaultCanvasCreator, IconConfig } from './data-driven-icon';


export class DataDrivenIcons {
  readonly prefix = 'ddi:';
  private map: Map;

  constructor(private createCanvas = defaultCanvasCreator) {}

  addTo(map: Map): Map {
    this.map = map;
    map.on('styleimagemissing', (e) => {
      const id = e.id; // id of the missing image
      if (id.indexOf(this.prefix) === 0) {
        const config = JSON.parse(id.slice(this.prefix.length));
        this.addImage(id, config);
      }
    });
    return map;
  }

  addImage(id: string, config: IconConfig) {
    const map = this.map;
    const icon = new DataDrivenIcon(config, this.createCanvas);
    if (icon.isAnimated) {
      map.addImage(id, this.asAnimatedImage(icon), { pixelRatio: 2 });
    } else {
      map.addImage(id, icon.getImageData());
    }
  }

  private asAnimatedImage(icon: DataDrivenIcon): { width: number; height: number; data: Uint8ClampedArray; render: () => boolean } {
    const map = this.map;
    return {
      width: icon.canvas.width,
      height: icon.canvas.height,
      data: icon.getImageData().data,

      render: function () {
        const doRepaint = icon.render();
        this.data = icon.getImageData().data;
        if (doRepaint) {
          map.triggerRepaint();
        }
        return doRepaint;
      }
    };
  }
}
