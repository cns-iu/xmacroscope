import { DefaultVisualization, ObjectFactory, ObjectFactoryRegistry, Project, Visualization } from '@dvl-fw/core';

import { GraphicVariableLegendComponent } from './graphic-variable-legend.component';


export class GraphicVariableLegendVisualization extends DefaultVisualization {
  // eslint-disable-next-line max-len
  readonly defaultDescription = 'A legend of a graphic variable data.';
  readonly component = GraphicVariableLegendComponent;
  readonly graphicSymbolOptions = [{
    id: 'items', label: 'Items', type: 'area',
    graphicVariableOptions: [
      { type: 'identifier', label: 'Identifier', visualization: 'id', scaleType: 'ratio', required: true }
    ]
  }];

  constructor(data: { id: string; description?: string; template?: string; properties: unknown; graphicSymbols: unknown },
              readonly project: Project) {
    super(data, project);
  }
}

export class GraphicVariableLegendVisualizationFactory implements ObjectFactory<Visualization, Project> {
  id = 'symbol-legend';
  type = 'visualization';

  async fromJSON(data: unknown, context: Project, registry: ObjectFactoryRegistry): Promise<Visualization> {
    return new GraphicVariableLegendVisualization(data, context);
  }
  toJSON(instance: Visualization, context: Project, registry: ObjectFactoryRegistry) {
    return instance.toJSON();
  }
}
