import { DataSource, DefaultGraphicSymbol, DefaultGraphicVariableMapping, DefaultProject,
  DefaultRecordSet, GeomapVisualization, GraphicSymbol, GraphicVariable, Project, RecordSet,
  ScatterplotVisualization, Visualization, DefaultDataSource, DefaultRawData } from '@dvl-fw/core';

import { XMacroscopeDataSource } from './xmacroscope-data-source';
import { MockRunRawData } from '../mock/mock-run-raw-data';
import { RunStreamController } from './run-stream-controller';
import { LocationSettings } from '../graphql/location-settings';


export interface XMacroscopeProjectConfig {
  mockData?: boolean;
  staticMockData?: boolean;
  endpoint?: string;
  deploymentLocation?: string;
  defaultUsState?: string;
}

export class XMacroscopeProject extends DefaultProject {
  runStreamController: RunStreamController;

  dataSources: DataSource[];
  recordSets: RecordSet[];
  graphicVariables: GraphicVariable[];
  graphicSymbols: GraphicSymbol[];
  visualizations: Visualization[];

  static async create(config: XMacroscopeProjectConfig): Promise<XMacroscopeProject> {
    if (config.endpoint && config.deploymentLocation) {
      const settingsGetter = new LocationSettings(config.endpoint, config.deploymentLocation);
      const settings = await settingsGetter.getSettings();
      if (settings && settings.usState) {
        config.defaultUsState = settings.usState;
      }
    }
    const project = new XMacroscopeProject(config);
    return project;
  }

  constructor(private config: XMacroscopeProjectConfig) {
    super();
    if (config.staticMockData) {
      this.dataSources = this.getStaticMockDataSources();
    } else {
      this.dataSources = this.getDataSources(config.mockData, config.endpoint);
    }
    this.recordSets = this.getRecordSets();
    this.graphicVariables = this.getGraphicVariables();
    this.graphicSymbols = this.getGraphicSymbols();
    this.visualizations = this.getVisualizations();
  }

  getDataSources(mockData: boolean, endpoint?: string): DataSource[] {
    const ds = new XMacroscopeDataSource({
      id: 'runDataSource',
      properties: { mockData, endpoint },
      recordStreams: [{id: 'runs', label: 'Runs'}]
    }, this);
    this.runStreamController = ds.runStreamController;
    return [ ds ];
  }

  getStaticMockDataSources(): DataSource[] {
    this.rawData.push(new MockRunRawData({
      id: 'runs', template: 'json',
      data: { 'runs': [] }
    }));
    // TODO: fix associated bug in MAV
    this.rawData.push(new DefaultRawData({
      id: 'activityLog', template: 'activityLog',
      data: { 'activityLog': [] }
    }));

    return [
      new DefaultDataSource({
        id: 'runDataSource', template: 'defaultDataSource', // TODO: fix associated bug in MAV
        properties: {rawData: 'runs'},
        recordStreams: [{id: 'runs', label: 'Runs'}]
      }, this)
    ];
  }

  getRecordSets(): RecordSet[] {
    return [
      new DefaultRecordSet({
        id: 'run',
        label: 'Run',
        labelPlural: 'Runs',
        defaultRecordStream: 'runs',
        dataVariables: [
          {id: 'selectRunner', label: 'Select Runner', dataType: 'persona', scaleType: 'nominal'},
          {id: 'time', label: 'Time (seconds)', dataType: 'number', scaleType: 'linear'},
          {id: 'height', label: 'Height (inches)', dataType: 'number', scaleType: 'linear'},
          {id: 'favoriteActivity', label: 'Favorite Activity', dataType: 'string', scaleType: 'nominal'},
          {id: 'ageGroup', label: 'Age Group', dataType: 'string', scaleType: 'nominal'},
          {id: 'zipCode', label: 'Zip Code', dataType: 'number', scaleType: 'nominal'}
        ]
      }, this)
    ];
  }

  getGraphicVariables(): GraphicVariable[] {
    return DefaultGraphicVariableMapping.fromJSON([
      {
        recordStream: 'runs',
        mappings: {
          run: {
            selectRunner: {
              identifier: [
                {selector: 'id'}
              ],
              label: [
                {selector: 'person.label'}
              ],
              shape: [
                {selector: 'person.icon'}
              ],
              color: [
                {selector: 'person.color'},
                {id: 'fixed', selector: 'fixed.color', label: 'Fixed'}
              ],
              areaSize: [
                {id: 'fixed', selector: 'fixed.areaSize', label: 'Fixed'}
              ]
            },
            time: {
              axis: [
                {selector: 'timeSeconds'}
              ],
              label: [
                {selector: 'timeLabel'}
              ],
              areaSize: [
                {selector: 'timeAreaSize'}
              ]
            },
            height: {
              axis: [
                {selector: 'person.height'}
              ],
              label: [
                {selector: 'person.height'}
              ],
              areaSize: [
                {selector: 'person.heightAreaSize'}
              ]
            },
            favoriteActivity: {
              axis: [
                {selector: 'person.favoriteActivity'}
              ],
              label: [
                {selector: 'person.favoriteActivity'}
              ],
              color: [
                {selector: 'person.favoriteActivityColor'}
              ]
            },
            ageGroup: {
              axis: [
                {selector: 'person.ageGroup'}
              ],
              label: [
                {selector: 'person.ageGroup'}
              ],
              areaSize: [
                {selector: 'person.ageGroupAreaSize'}
              ]
            },
            zipCode: {
              latlng: [
                {selector: 'person.latlng'}
              ],
              identifier: [ // TODO: Fix in @dvl-fw to stateIdentifier
                {selector: 'person.state'}
              ],
              label: [
                {selector: 'person.zipCode'}
              ]
            },
          }
        }
      }
    ], this);
  }

  getGraphicSymbols(): GraphicSymbol[] {
    return [
      new DefaultGraphicSymbol({
        id: 'runPoints',
        type: 'area',
        recordStream: 'runs',
        graphicVariables: {
          identifier: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'identifier',
            graphicVariableId: 'identifier'
          },
          color: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'color',
            graphicVariableId: 'fixed'
          },
          x: {
            recordSet: 'run',
            dataVariable: 'time',
            graphicVariableType: 'axis',
            graphicVariableId: 'axis'
          },
          y: {
            recordSet: 'run',
            dataVariable: 'height',
            graphicVariableType: 'axis',
            graphicVariableId: 'axis'
          },
          latlng: {
            recordSet: 'run',
            dataVariable: 'zipCode',
            graphicVariableType: 'latlng',
            graphicVariableId: 'latlng'
          },
          areaSize: {
            recordSet: 'run',
            dataVariable: 'ageGroup',
            graphicVariableType: 'areaSize',
            graphicVariableId: 'areaSize'
          }
        }
      }, this),
      new DefaultGraphicSymbol({
        id: 'runStates',
        type: 'area',
        recordStream: 'runs',
        graphicVariables: {
          identifier: {
            recordSet: 'run',
            dataVariable: 'zipCode',
            graphicVariableType: 'identifier',
            graphicVariableId: 'identifier'
          }
        }
      }, this)
    ];
  }

  getVisualizations(): Visualization[] {
    return [
      new ScatterplotVisualization({
        id: 'SG01',
        template: 'scattergraph',
        properties: {
          gridlines: true,
          showAxisLabels: true,
          showAxisIndicators: true
        },
        graphicSymbols: {
          points: 'runPoints'
        }
      }, this),
      new GeomapVisualization({
        id: 'GM01',
        template: 'geomap',
        properties: {
          defaultUsState: this.config.defaultUsState,
          stateDefaultColor: 'white',
          stateDefaultStrokeColor: '#bebebe'
        },
        graphicSymbols: {
          points: 'runPoints',
          states: 'runStates'
        }
      }, this),
    ];
  }
}
