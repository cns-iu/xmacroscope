import {
  DataSource, DefaultDataSource, DefaultGraphicSymbol, DefaultGraphicVariableMapping, DefaultProject, DefaultRawData,
  DefaultRecordSet, GraphicSymbol, GraphicVariable, RecordSet, Visualization,
} from '@dvl-fw/core';
import { isArray } from 'lodash';

import { asMessage } from '../graphql/graphql-queries';
import { LocationSettings } from '../graphql/location-settings';
import { MockRunRawData } from '../mock/mock-run-raw-data';
import { GeographicMapVisualization } from '../visualizations/geographic-map/geographic-map.visualization';
import {
  GraphicVariableLegendVisualization,
} from '../visualizations/graphic-variable-legend/graphic-variable-legend.visualization';
import { ScatterplotMapVisualization } from '../visualizations/scatterplot-map/scatterplot-map.visualization';
import { TableVisualization } from '../visualizations/table/table.visualization';
import { opponentRuns } from './opponent-runs';
import { Run, RunOptions } from './run';
import { RunStreamController } from './run-stream-controller';
import { XMacroscopeDataSource } from './xmacroscope-data-source';


export interface XMacroscopeProjectConfig {
  mockData?: boolean;
  staticData?: 'mocked' | unknown;
  endpoint?: string;
  location?: string;
  deploymentLocation?: string;
  defaultUsState?: string;
  runTimeout?: number;
  opponentRuns?: 'default' | unknown[] | string;
}

export class XMacroscopeProject extends DefaultProject {
  static async create(config: XMacroscopeProjectConfig): Promise<XMacroscopeProject> {
    config = await XMacroscopeProject.resolveConfig(config);
    return new XMacroscopeProject(config);
  }

  static async resolveConfig(config: XMacroscopeProjectConfig): Promise<XMacroscopeProjectConfig> {
    const resolvedConfig = config;
    if (!isArray(config.opponentRuns)) {
      resolvedConfig.opponentRuns = opponentRuns[config.opponentRuns as keyof typeof opponentRuns] || [];
    }
    if (config.endpoint && config.deploymentLocation) {
      const settings = await LocationSettings.getSettings(config.endpoint, config.deploymentLocation);
      if (settings) {
        if (settings.location) {
          resolvedConfig.location = settings.location;
        }
        if (settings.usState !== undefined || settings.usState !== 'null') {
          resolvedConfig.defaultUsState = settings.usState;
        }
        if (settings.runTimeout) {
          resolvedConfig.runTimeout = settings.runTimeout;
        }
      }
    }
    return resolvedConfig;
  }

  override dataSources: DataSource[];
  override recordSets: RecordSet[];
  override graphicVariables: GraphicVariable[];
  override graphicSymbols: GraphicSymbol[];
  override visualizations: Visualization[];

  runStreamController?: RunStreamController;

  constructor(public config: XMacroscopeProjectConfig) {
    super();
    if (config.staticData) {
      this.dataSources = this.getStaticDataSources(config.staticData);
    } else {
      this.dataSources = this.getDataSources(config.mockData ?? false, config.endpoint);
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
      recordStreams: [{ id: 'runs', label: 'Runs' }]
    }, this);
    this.runStreamController = ds.runStreamController;
    const runs = Array.isArray(this.config.opponentRuns) ? this.config.opponentRuns : [];
    this.runStreamController.opponentRuns = runs.map(r => new Run(r as RunOptions));
    return [ds];
  }

  getStaticDataSources(staticData: 'mocked' | unknown): DataSource[] {
    if (staticData === 'mocked') {
      this.rawData.push(new MockRunRawData({
        id: 'runs', template: 'json',
        data: { 'runs': [] }
      }));
    } else {
      type StaticDataType = Record<'data', Record<'Runs', Record<string, unknown>[]>>;
      const runs = (staticData as StaticDataType).data.Runs.map(run =>
        asMessage({ type: 'run-finished', timestamp: run.end, run }).run?.toJSON()
      );

      this.rawData.push(new DefaultRawData({
        id: 'runs', template: 'json',
        data: { runs }
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
        properties: { rawData: 'runs' },
        recordStreams: [{ id: 'runs', label: 'Runs' }]
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
          { id: 'icon', label: 'Icon', dataType: 'string', scaleType: 'nominal' },
          { id: 'age', label: 'Age (years)', dataType: 'number', scaleType: 'linear' },
          { id: 'height', label: 'Height (inches)', dataType: 'number', scaleType: 'linear' },
          { id: 'time', label: 'Time (seconds)', dataType: 'number', scaleType: 'linear' },
          { id: 'opponent', label: 'Opponent', dataType: 'string', scaleType: 'nominal' },
          { id: 'shoes', label: 'Shoes', dataType: 'string', scaleType: 'nominal' },
          { id: 'zipCode', label: 'Zip Code', dataType: 'number', scaleType: 'nominal' }
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
            icon: {
              identifier: [
                { selector: 'id' }
              ],
              imageUrl: [
                { selector: 'person.iconShape', label: ' ' }
              ],
              text: [
                { id: 'fixed', selector: 'fixed.text', label: 'Fixed' }
              ],
              shape: [
                { id: 'fixed', selector: 'fixed.shape' }
              ],
              color: [
                { id: 'fixed', selector: 'fixed.color', label: 'Fixed' },
                { id: 'row-color', selector: 'tableRowColor', label: 'Row Color' }
              ],
              input: [
                { id: 'fixed', selector: 'fixed.text', label: 'Fixed' }
              ],
              label: [
                { id: 'fixed', selector: 'fixed.text', label: 'Fixed' },
                { id: 'label', selector: 'person.label' }
              ],
              order: [
                { id: 'fixed', selector: 'endOrder', label: 'Fixed' }
              ],
              areaSize: [
                { id: 'fixed', selector: 'fixed.areaSize', label: 'Fixed' }
              ],
              pulse: [
                { id: 'pulse', selector: 'selected' },
                { id: 'fixed', selector: 'fixed.pulse', label: 'Fixed' }
              ],
              transparency: [
                { id: 'fixed', selector: 'fixed.transparency', label: 'Fixed' }
              ],
              strokeTransparency: [
                { id: 'fixed', selector: 'fixed.strokeTransparency', label: 'Fixed' }
              ],
              strokeWidth: [
                { id: 'fixed', selector: 'fixed.strokeWidth', label: 'Fixed' }
              ],
              strokeColor: [
                { id: 'fixed', selector: 'fixed.strokeColor', label: 'Fixed' }
              ]
            },
            age: {
              axis: [
                { selector: 'person.age' }
              ],
              input: [
                { selector: 'person.age' }
              ],
              label: [
                { selector: 'person.age' }
              ],
              order: [
                { selector: 'person.age' }
              ],
              areaSize: [
                { selector: 'person.ageAreaSize' }
              ]
            },
            height: {
              axis: [
                { selector: 'person.height' }
              ],
              input: [
                { selector: 'person.height' }
              ],
              label: [
                { selector: 'person.height' }
              ],
              order: [
                { selector: 'person.height' }
              ],
              areaSize: [
                { selector: 'person.heightAreaSize' }
              ]
            },
            time: {
              axis: [
                { selector: 'timeSeconds' }
              ],
              input: [
                { selector: 'timeSeconds' }
              ],
              label: [
                { selector: 'timeLabel' }
              ],
              order: [
                { selector: 'timeSeconds' }
              ],
              areaSize: [
                { selector: 'timeAreaSize' }
              ]
            },
            opponent: {
              input: [
                { selector: 'person.Opponent.label' }
              ],
              label: [
                { selector: 'person.Opponent.label' }
              ],
              order: [
                { selector: 'person.Opponent.label' }
              ],
              text: [
                { selector: 'person.Opponent.label' }
              ],
              color: [
                { selector: 'person.Opponent.color' }
              ],
              shape: [
                { selector: 'person.Opponent.shape' }
              ]
            },
            shoes: {
              input: [
                { selector: 'person.Shoe.label' }
              ],
              label: [
                { selector: 'person.Shoe.label' }
              ],
              order: [
                { selector: 'person.Shoe.label' }
              ],
              text: [
                { selector: 'person.Shoe.label' }
              ],
              color: [
                { selector: 'person.Shoe.color' }
              ],
              shape: [
                { selector: 'person.Shoe.shape' }
              ]
            },
            zipCode: {
              latitude: [
                { selector: 'person.latitude' }
              ],
              longitude: [
                { selector: 'person.longitude' }
              ],
              identifier: [ // TODO: Fix in @dvl-fw to stateIdentifier
                { selector: 'person.state' }
              ],
              order: [
                { selector: 'person.zipCode' }
              ],
              label: [
                { selector: 'person.zipCode' }
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
        id: 'runTable',
        type: 'record',
        recordStream: 'runs',
        graphicVariables: {
          identifier: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'identifier',
            graphicVariableId: 'identifier'
          },
          order: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'order',
            graphicVariableId: 'fixed'
          },
          color: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'color',
            graphicVariableId: 'row-color'
          },
          pulse: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'pulse',
            graphicVariableId: 'pulse'
          },
          icon: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'imageUrl',
            graphicVariableId: 'imageUrl'
          },
          age: {
            recordSet: 'run',
            dataVariable: 'age',
            graphicVariableType: 'label',
            graphicVariableId: 'label'
          },
          height: {
            recordSet: 'run',
            dataVariable: 'height',
            graphicVariableType: 'label',
            graphicVariableId: 'label'
          },
          time: {
            recordSet: 'run',
            dataVariable: 'time',
            graphicVariableType: 'label',
            graphicVariableId: 'label'
          },
          opponent: {
            recordSet: 'run',
            dataVariable: 'opponent',
            graphicVariableType: 'label',
            graphicVariableId: 'label'
          },
          shoes: {
            recordSet: 'run',
            dataVariable: 'shoes',
            graphicVariableType: 'label',
            graphicVariableId: 'label'
          },
          zipCode: {
            recordSet: 'run',
            dataVariable: 'zipCode',
            graphicVariableType: 'label',
            graphicVariableId: 'label'
          }
        }
      }, this),
      new DefaultGraphicSymbol({
        id: 'runPoints',
        type: 'area',
        recordStream: 'runs',
        graphicVariables: {
          identifier: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'identifier',
            graphicVariableId: 'identifier'
          },
          pulse: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'pulse',
            graphicVariableId: 'pulse'
          },
          shape: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'shape',
            graphicVariableId: 'fixed'
          },
          color: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'color',
            graphicVariableId: 'fixed'
          },
          areaSize: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'areaSize',
            graphicVariableId: 'fixed'
          },
          transparency: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'transparency',
            graphicVariableId: 'fixed'
          },
          strokeColor: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'strokeColor',
            graphicVariableId: 'fixed'
          },
          strokeTransparency: {
            recordSet: 'run',
            dataVariable: 'icon',
            graphicVariableType: 'strokeTransparency',
            graphicVariableId: 'fixed'
          },
          strokeWidth: {
            recordSet: 'run',
            dataVariable: 'icon',
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
          }
        }
      }, this)
    ];
  }

  getVisualizations(): Visualization[] {
    return [
      new TableVisualization({
        id: 'datatable',
        template: 'table',
        properties: {},
        graphicSymbols: {
          items: 'runTable'
        }
      }, this),
      new ScatterplotMapVisualization({
        id: 'scattergraph',
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
      new GeographicMapVisualization({
        id: 'geomap',
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
              selector: ['world', 'united states', this.config.defaultUsState ?? 'Indiana', 'counties'],
              projection: 'albersUsa',
              label: this.config.defaultUsState ?? 'Indiana',
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
      new GraphicVariableLegendVisualization({
        id: 'color-legend',
        template: 'graphic-variable-legend',
        properties: {
          graphicVariable: 'color',
          itemDefaults: {
            strokeColor: '#83786F',
            strokeWidth: 1,
            shape: 'square'
          }
        },
        graphicSymbols: { items: 'runPoints' }
      }, this),
      new GraphicVariableLegendVisualization({
        id: 'shape-legend',
        template: 'graphic-variable-legend',
        properties: {
          graphicVariable: 'shape',
          itemDefaults: {
            color: '#FFFFFF',
            strokeColor: '#83786F',
            strokeWidth: 1
          }
        },
        graphicSymbols: { items: 'runPoints' }
      }, this),
      new GraphicVariableLegendVisualization({
        id: 'size-legend',
        template: 'graphic-variable-legend',
        properties: {
          graphicVariable: 'areaSize',
          itemDefaults: {
            color: '#FFFFFF',
            strokeColor: '#83786F',
            strokeWidth: 1,
            shape: 'circle'
          }
        },
        graphicSymbols: { items: 'runPoints' }
      }, this)
    ];
  }
}
