import { DataSource, DataSourceOptions, ObjectFactory, ObjectFactoryRegistry, Project, RecordStream } from '@dvl-fw/core';

import { GraphQLRunDataStream } from '../graphql/graphql-run-data-stream';
import { MockRunDataStream } from '../mock/mock-run-data-stream';
import { RunStreamController } from './run-stream-controller';


export interface XMacroscopeDataSourceOptions extends DataSourceOptions {
  mockData: boolean;
  endpoint?: string;
}

export interface XMacroscopeDataSourceData {
  id: string;
  properties: XMacroscopeDataSourceOptions;

  [key: string]: unknown;
}

export class XMacroscopeDataSource implements DataSource {
  id: string;
  template = 'xmacroscope';
  properties: XMacroscopeDataSourceOptions;
  recordStreams: RecordStream[];
  readonly runStreamController = new RunStreamController();

  constructor(data: XMacroscopeDataSourceData, _project: Project) {
    ({ id: this.id, properties: this.properties } = data);
    this.recordStreams = this.createRecordStreams();
  }

  toJSON(): unknown {
    return {
      id: this.id, template: this.template, properties: this.properties,
      recordStreams: this.recordStreams.map(s => s.toJSON())
    };
  }

  private createRecordStreams(): RecordStream[] {
    const { properties: { mockData, endpoint }, runStreamController: controller } = this;

    if (mockData) {
      return [new MockRunDataStream(controller)];
    } else if (endpoint) {
      return [new GraphQLRunDataStream(controller, endpoint)];
    }

    return [];
  }
}

export class XMacroscopeDataSourceFactory implements ObjectFactory<DataSource, Project> {
  id = 'xmacroscope';
  type = 'dataSource';

  async fromJSON(data: unknown, context: Project, _registry: ObjectFactoryRegistry): Promise<DataSource> {
    return new XMacroscopeDataSource(data as XMacroscopeDataSourceData, context);
  }

  toJSON(instance: DataSource, _context: Project, _registry: ObjectFactoryRegistry): unknown {
    return instance.toJSON();
  }
}
