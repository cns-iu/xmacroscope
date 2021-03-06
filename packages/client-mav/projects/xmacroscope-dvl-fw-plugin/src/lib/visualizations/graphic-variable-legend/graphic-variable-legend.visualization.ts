import { DefaultVisualization, ObjectFactory, Visualization, Project, ObjectFactoryRegistry } from '@dvl-fw/core';
import { GraphicVariableLegendComponent } from './graphic-variable-legend.component';


export class GraphicVariableLegendVisualization extends DefaultVisualization {
  // tslint:disable-next-line: max-line-length
  readonly defaultDescription = 'A legend of a graphic variable data.';
  readonly component = GraphicVariableLegendComponent;
  readonly graphicSymbolOptions = [{
    id: 'items', label: 'Items', type: 'area',
    graphicVariableOptions: [
      { type: 'identifier', label: 'Identifier', visualization: 'id', scaleType: 'ratio', required: true }
    ]
  }];

  constructor(data: {id: string, description?: string, template?: string, properties: any, graphicSymbols: any},
      readonly project: Project) {
    super(data, project);
  }
}

export class GraphicVariableLegendVisualizationFactory implements ObjectFactory<Visualization, Project> {
  id = 'symbol-legend';
  type = 'visualization';

  async fromJSON(data: any, context: Project, registry: ObjectFactoryRegistry): Promise<Visualization> {
    return new GraphicVariableLegendVisualization(data, context);
  }
  toJSON(instance: Visualization, context: Project, registry: ObjectFactoryRegistry) {
    return instance.toJSON();
  }
}
