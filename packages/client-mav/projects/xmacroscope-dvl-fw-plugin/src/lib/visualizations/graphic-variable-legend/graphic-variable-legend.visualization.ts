import {
  DefaultVisualization, DefaultVisualizationArg, ObjectFactory, ObjectFactoryRegistry, Project, Visualization,
} from '@dvl-fw/core';

import { GraphicVariableLegendComponent } from './graphic-variable-legend.component';


export class GraphicVariableLegendVisualization extends DefaultVisualization {
  readonly defaultDescription = 'A legend of a graphic variable data.';
  readonly component = GraphicVariableLegendComponent;
  readonly graphicSymbolOptions = [{
    id: 'items', label: 'Items', type: 'area',
    graphicVariableOptions: [
      { type: 'identifier', label: 'Identifier', visualization: 'id', scaleType: 'ratio', required: true }
    ]
  }];

  constructor(data: DefaultVisualizationArg, readonly project: Project) {
    super(data, project);
  }
}

export class GraphicVariableLegendVisualizationFactory implements ObjectFactory<Visualization, Project> {
  id = 'symbol-legend';
  type = 'visualization';

  async fromJSON(data: unknown, context: Project, _registry: ObjectFactoryRegistry): Promise<Visualization> {
    return new GraphicVariableLegendVisualization(data as DefaultVisualizationArg, context);
  }

  toJSON(instance: Visualization, _context: Project, _registry: ObjectFactoryRegistry): unknown {
    return instance.toJSON();
  }
}
