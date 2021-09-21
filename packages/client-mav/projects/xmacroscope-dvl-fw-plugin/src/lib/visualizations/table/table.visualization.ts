import { DefaultVisualization, ObjectFactory, ObjectFactoryRegistry, Project, Visualization } from '@dvl-fw/core';

import { TableComponent } from './table.component';


export class TableVisualization extends DefaultVisualization {
  // eslint-disable-next-line max-len
  readonly defaultDescription = 'A table displaying data.';
  readonly component = TableComponent;
  readonly graphicSymbolOptions = [{
    id: 'data', label: 'Data', type: 'area',
    graphicVariableOptions: [
      { type: 'identifier', label: 'Identifier', visualization: 'id', scaleType: 'ratio', required: true },
      { type: 'order', label: 'Sort Order' },
      { type: 'color', label: 'Color Hue', visualization: 'color', scaleType: 'nominal', staticVisualization: 'color-area' }
    ]
  }];
}

export class TableVisualizationFactory implements ObjectFactory<Visualization, Project> {
  id = 'table';
  type = 'visualization';

  async fromJSON(data: any, context: Project, registry: ObjectFactoryRegistry): Promise<Visualization> {
    return new TableVisualization(data, context);
  }
  toJSON(instance: Visualization, context: Project, registry: ObjectFactoryRegistry) {
    return instance.toJSON();
  }
}
