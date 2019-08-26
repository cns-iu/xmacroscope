import { DataSource, DefaultGraphicSymbol, DefaultGraphicVariableMapping, DefaultProject,
  DefaultRecordSet, GeomapVisualization, GraphicSymbol, GraphicVariable, Project, RecordSet,
  ScatterplotVisualization, Visualization, DefaultDataSource, DefaultRawData } from '@dvl-fw/core';

import { XMacroscopeDataSource } from './xmacroscope-data-source';
import { MockRunRawData } from '../mock/mock-run-raw-data';
import { RunStreamController } from './run-stream-controller';
import { LocationSettings } from '../graphql/location-settings';
import { Run } from './run';
import { asMessage } from '../graphql/graphql-queries';


export interface XMacroscopeProjectConfig {
  mockData?: boolean;
  staticData?: 'mocked' | any;
  endpoint?: string;
  deploymentLocation?: string;
  defaultUsState?: string;
  runTimeout?: number;
}

export class XMacroscopeProject extends DefaultProject {
  runStreamController: RunStreamController;

  dataSources: DataSource[];
  recordSets: RecordSet[];
  graphicVariables: GraphicVariable[];
  graphicSymbols: GraphicSymbol[];
  visualizations: Visualization[];

  static async create(config: XMacroscopeProjectConfig): Promise<XMacroscopeProject> {
    config = await XMacroscopeProject.resolveConfig(config);
    return new XMacroscopeProject(config);
  }

  static async resolveConfig(config: XMacroscopeProjectConfig): Promise<XMacroscopeProjectConfig> {
    if (config.endpoint && config.deploymentLocation) {
      const settings = await LocationSettings.getSettings(config.endpoint, config.deploymentLocation);
      if (settings) {
        if (settings.usState) {
          config.defaultUsState = settings.usState;
        }
        if (settings.runTimeout) {
          config.runTimeout = settings.runTimeout;
        }
      }
    }
    return config;
  }

  constructor(private config: XMacroscopeProjectConfig) {
    super();
    if (config.staticData) {
      this.dataSources = this.getStaticDataSources(config.staticData);
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

  getStaticDataSources(staticData: 'mocked' | any): DataSource[] {
    if (staticData === 'mocked') {
      this.rawData.push(new MockRunRawData({
        id: 'runs', template: 'json',
        data: { 'runs': [] }
      }));
    } else {
      this.rawData.push(new DefaultRawData({
        id: 'runs', template: 'json',
        data: { 'runs': staticData.data.Runs.map((run: any) =>
          asMessage({ type: 'run-finished', timestamp: run.end, run}).run.toJSON()
        )}
      }));
    }
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
              icon: [
                {selector: 'persona'}
              ],
              text: [
                {id: 'fixed', selector: 'fixed.text', label: 'Fixed'}
              ],
              shape: [
                {selector: 'showPersonaFixedShape'}
              ],
              color: [
                {id: 'fixed', selector: 'showPersonaFixedColor', label: 'Fixed'}
              ],
              input: [
                {id: 'fixed', selector: 'fixed.text', label: 'Fixed'}
              ],
              label: [
                {id: 'fixed', selector: 'fixed.text', label: 'Fixed'},
                {selector: 'person.label'}
              ],
              order: [
                {id: 'fixed', selector: 'fixed.text', label: 'Fixed'}
              ],
              areaSize: [
                {id: 'fixed', selector: 'showPersonaFixedAreaSize', label: 'Fixed'}
              ],
              pulse: [
                {id: 'pulse', selector: 'selected'},
                {id: 'fixed', selector: 'fixed.pulse', label: 'Fixed'}
              ],
              transparency: [
                {id: 'fixed', selector: 'showPersonaFixedTransparency', label: 'Fixed'}
              ],
              strokeTransparency: [
                {id: 'fixed', selector: 'fixed.strokeTransparency', label: 'Fixed'}
              ],
              strokeWidth: [
                {id: 'fixed', selector: 'fixed.strokeWidth', label: 'Fixed'}
              ],
              strokeColor: [
                {id: 'fixed', selector: 'fixed.color', label: 'Fixed'}
              ]
            },
            time: {
              axis: [
                {selector: 'timeSeconds'}
              ],
              input: [
                {selector: 'timeSeconds'}
              ],
              label: [
                {selector: 'timeLabel'}
              ],
              order: [
                {selector: 'timeSeconds'}
              ],
              areaSize: [
                {selector: 'showPersonaTimeAreaSize'}
              ]
            },
            height: {
              axis: [
                {selector: 'person.height'}
              ],
              input: [
                {selector: 'person.height'}
              ],
              label: [
                {selector: 'person.height'}
              ],
              order: [
                {selector: 'person.height'}
              ],
              areaSize: [
                {selector: 'showPersonaHeightAreaSize'}
              ]
            },
            favoriteActivity: {
              axis: [
                {selector: 'person.favoriteActivity'}
              ],
              input: [
                {selector: 'person.favoriteActivity'}
              ],
              label: [
                {selector: 'person.favoriteActivity'}
              ],
              order: [
                {selector: 'person.favoriteActivityAreaSize'}
              ],
              text: [
                {selector: 'person.favoriteActivity'}
              ],
              color: [
                {selector: 'showPersonaFavoriteActivityColor'}
              ]
            },
            ageGroup: {
              axis: [
                {selector: 'person.ageGroup'}
              ],
              input: [
                {selector: 'person.ageGroup'}
              ],
              label: [
                {selector: 'person.ageGroup'}
              ],
              order: [
                {selector: 'person.ageGroup'}
              ],
              areaSize: [
                {selector: 'showPersonaAgeGroupAreaSize'}
              ]
            },
            zipCode: {
              latitude: [
                {selector: 'person.latlng[0]'}
              ],
              longitude: [
                {selector: 'person.latlng[1]'}
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
          pulse: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'pulse',
            graphicVariableId: 'pulse'
          },
          shape: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'shape',
            graphicVariableId: 'shape'
          },
          color: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'color',
            graphicVariableId: 'fixed'
          },
          transparency: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'transparency',
            graphicVariableId: 'fixed'
          },
          strokeColor: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'strokeColor',
            graphicVariableId: 'fixed'
          },
          strokeTransparency: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'strokeTransparency',
            graphicVariableId: 'fixed'
          },
          strokeWidth: {
            recordSet: 'run',
            dataVariable: 'selectRunner',
            graphicVariableType: 'strokeWidth',
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
          latitude: {
            recordSet: 'run',
            dataVariable: 'zipCode',
            graphicVariableType: 'latitude',
            graphicVariableId: 'latitude'
          },
          longitude: {
            recordSet: 'run',
            dataVariable: 'zipCode',
            graphicVariableType: 'longitude',
            graphicVariableId: 'longitude'
          },
          areaSize: {
            recordSet: 'run',
            dataVariable: 'ageGroup',
            graphicVariableType: 'areaSize',
            graphicVariableId: 'areaSize'
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
          basemapZoomLevels: [
            {
              selector: ['world', 'united states', 'states'],
              projection: 'albersUsa',
              label: 'United States',
              class: 'us-icon'
            },
            {
              selector: ['world', 'united states', this.config.defaultUsState || 'Indiana', 'counties'],
              projection: 'albersUsa',
              label: this.config.defaultUsState || 'Indiana',
              class: 'state-icon'
            }
          ],
          basemapSelectedZoomLevel: 2,
          basemapDefaultColor: 'white',
          basemapDefaultStrokeColor: '#bebebe',
          basemapDefaultStrokeWidth: '0.1%'
        },
        graphicSymbols: {
          nodes: 'runPoints'
        }
      }, this),
    ];
  }
}
