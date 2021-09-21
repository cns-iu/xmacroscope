import { DefaultVisualization, ObjectFactory, ObjectFactoryRegistry, Project, Visualization } from '@dvl-fw/core';

import { ScatterplotMapComponent } from './scatterplot-map.component';


export class ScatterplotMapVisualization extends DefaultVisualization {
  // eslint-disable-next-line max-len
  readonly defaultDescription = 'A scatter graph visualization uses Cartesian coordinates as a reference system. In the current MAV, records are represented by circles. Circles are placed based on values for two data variables: one plotted along the x-axis, the other along the y-axis. Circles can be size coded and color coded to represent additional data variables. A third data variable can be added to the graph using tooltips for circles.';
  readonly component = ScatterplotMapComponent;
  readonly graphicSymbolOptions = [{
    id: 'points', label: 'Points', type: 'area',
    graphicVariableOptions: [
      { type: 'identifier', label: 'Identifier', visualization: 'id', scaleType: 'ratio', required: true },
      { id: 'x', type: 'axis', label: 'X-Axis', visualization: 'x-axis', required: true },
      { id: 'y', type: 'axis', label: 'Y-Axis', visualization: 'y-axis', required: true },
      { type: 'color', label: 'Color Hue', visualization: 'color', scaleType: 'nominal', staticVisualization: 'color-area' },
      { id: 'strokeColor', type: 'color', label: 'Stroke Color Hue', visualization: 'color', advanced: true },
      { type: 'areaSize', label: 'Size', visualization: 'node-size', scaleType: 'ratio', staticVisualization: 'area-size' },
      { type: 'transparency', label: 'Transparency', advanced: true },
      { id: 'strokeTransparency', type: 'transparency', label: 'Stroke Transparency', advanced: true },
      { id: 'tooltip', type: 'text', label: 'Tooltip', visualization: 'label' },
      { type: 'shape', label: 'Shape', advanced: true },
      { type: 'pulse', label: 'Pulse', advanced: true },
    ]
  }];
}

export class ScatterplotMapVisualizationFactory implements ObjectFactory<Visualization, Project> {
  id = 'scattergraph';
  type = 'visualization';

  async fromJSON(data: any, context: Project, registry: ObjectFactoryRegistry): Promise<Visualization> {
    return new ScatterplotMapVisualization(data, context);
  }
  toJSON(instance: Visualization, context: Project, registry: ObjectFactoryRegistry) {
    return instance.toJSON();
  }
}
