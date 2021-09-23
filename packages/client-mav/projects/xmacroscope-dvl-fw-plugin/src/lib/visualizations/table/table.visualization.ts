import {
  DefaultVisualization, DefaultVisualizationArg, ObjectFactory, ObjectFactoryRegistry, Project, Visualization,
} from '@dvl-fw/core';

import { TableComponent } from './table.component';


export class TableVisualization extends DefaultVisualization {
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

  async fromJSON(data: unknown, context: Project, _registry: ObjectFactoryRegistry): Promise<Visualization> {
    return new TableVisualization(data as DefaultVisualizationArg, context);
  }

  toJSON(instance: Visualization, _context: Project, _registry: ObjectFactoryRegistry): unknown {
    return instance.toJSON();
  }
}
