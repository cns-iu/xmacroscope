// refer https://angular.io/guide/styleguide#style-03-06 for import line spacing
import { DataSource, DataSourceOptions, ObjectFactory, ObjectFactoryRegistry, Project, RecordStream } from '@dvl-fw/core';

import { GraphQLRunDataStream } from '../graphql/graphql-run-data-stream';
import { MockRunDataStream } from '../mock/mock-run-data-stream';
import { Run } from './run';
import { RunStreamController } from './run-stream-controller';


export interface XMacroscopeDataSourceOptions extends DataSourceOptions {
  mockData: boolean;
  endpoint?: string;
}

export class XMacroscopeDataSource implements DataSource {
  id: string;
  template = 'xmacroscope';
  recordStreams: RecordStream[];
  properties: XMacroscopeDataSourceOptions;
  public readonly runStreamController: RunStreamController;

  constructor(data: any, private project: Project) {
    Object.assign(this, data);
    this.runStreamController = new RunStreamController();

    let recordStream: RecordStream<Run>;
    if (this.properties.mockData) {
      recordStream = new MockRunDataStream(this.runStreamController);
    } else if (this.properties.endpoint) {
      recordStream = new GraphQLRunDataStream(this.runStreamController, this.properties.endpoint);
    }
    this.recordStreams = recordStream ? [recordStream] : [];
  }

  toJSON(): any {
    return {
      id: this.id, template: this.template, properties: this.properties,
      recordStreams: this.recordStreams.map(s => s.toJSON())
    };
  }
}

export class XMacroscopeDataSourceFactory implements ObjectFactory<DataSource, Project> {
  id = 'xmacroscope';
  type = 'dataSource';

  async fromJSON(data: any, context: Project, registry: ObjectFactoryRegistry): Promise<DataSource> {
    return new XMacroscopeDataSource(data, context);
  }
  toJSON(instance: DataSource, context: Project, registry: ObjectFactoryRegistry): any {
    return instance.toJSON();
  }
}
