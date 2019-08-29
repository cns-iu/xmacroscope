import { Map } from 'mapbox-gl';
import { defaultCanvasCreator, DataDrivenIcon } from './data-driven-icon';

export class DataDrivenIcons {
  readonly prefix = 'ddi:';
  private map: Map;

  constructor(private createCanvas = defaultCanvasCreator) {}

  addTo(map: Map): Map {
    this.map = map;
    map.on('styleimagemissing', (e) => {
      const id = e.id; // id of the missing image
      if (id.indexOf(this.prefix) !== 0) { return; }

      const config = JSON.parse(id.slice(this.prefix.length));
      const icon = new DataDrivenIcon(config, this.createCanvas);
      map.addImage(id, icon.getImageData());
    });

    return map;
  }
}
