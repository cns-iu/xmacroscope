import {
  DefaultVisualization, DefaultVisualizationArg, ObjectFactory, ObjectFactoryRegistry, Project, Visualization,
} from '@dvl-fw/core';

import { SymbolLegendComponent } from './symbol-legend.component';


export class SymbolLegendVisualization extends DefaultVisualization {
  readonly defaultDescription = 'A legend of symbol data.';
  readonly component = SymbolLegendComponent;
  readonly graphicSymbolOptions = [{
    id: 'items', label: 'Items', type: 'area',
    graphicVariableOptions: [
      { type: 'identifier', label: 'Identifier', visualization: 'id', scaleType: 'ratio', required: true },
      { type: 'color', label: 'Color Hue', visualization: 'color', scaleType: 'nominal', staticVisualization: 'color-area' },
      { id: 'strokeColor', type: 'color', label: 'Stroke Color Hue', visualization: 'color', advanced: true },
      { type: 'areaSize', label: 'Size', visualization: 'node-size', scaleType: 'ratio', staticVisualization: 'area-size' },
      { type: 'transparency', label: 'Transparency', advanced: true },
      { id: 'strokeTransparency', type: 'transparency', label: 'Stroke Transparency', advanced: true },
      { type: 'shape', label: 'Shape', advanced: true }
    ]
  }];
}

export class SymbolLegendVisualizationFactory implements ObjectFactory<Visualization, Project> {
  id = 'symbol-legend';
  type = 'visualization';

  async fromJSON(data: unknown, context: Project, _registry: ObjectFactoryRegistry): Promise<Visualization> {
    return new SymbolLegendVisualization(data as DefaultVisualizationArg, context);
  }

  toJSON(instance: Visualization, _context: Project, _registry: ObjectFactoryRegistry): unknown {
    return instance.toJSON();
  }
}
