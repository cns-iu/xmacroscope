import {
  DataSource,
  DefaultGraphicSymbol,
  DefaultGraphicVariableMapping,
  DefaultProject,
  DefaultRecordSet,
  GeomapVisualization,
  GraphicSymbol,
  GraphicVariable,
  Project,
  RecordSet,
  ScatterplotVisualization,
  Visualization
} from '@dvl-fw/core';
import { XMacroscopeDataSource } from './xmacroscope-data-source';

export class XMacroscopeTemplateProject extends DefaultProject {
  dataSources: DataSource[];
  recordSets: RecordSet[];
  graphicVariables: GraphicVariable[];
  graphicSymbols: GraphicSymbol[];
  visualizations: Visualization[];

  static async create(mockData: boolean, endpoint?: string): Promise<Project> {
    const project = new XMacroscopeTemplateProject(mockData, endpoint);
    return project;
  }

  constructor(mockData: boolean, endpoint?: string) {
    super();
    this.dataSources = this.getDataSources(mockData, endpoint);
    this.recordSets = this.getRecordSets();
    this.graphicVariables = this.getGraphicVariables();
    this.graphicSymbols = this.getGraphicSymbols();
    this.visualizations = this.getVisualizations();
  }

  getDataSources(mockData: boolean, endpoint?: string): DataSource[] {
    return [
      new XMacroscopeDataSource({
        id: 'runDataSource',
        properties: { mockData, endpoint },
        recordStreams: [{id: 'runs', label: 'Runs'}]
      }, this),
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
          {id: 'selectRunner', label: 'Select Runner', dataType: 'string', scaleType: 'nominal'},
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
                {selector: 'time'}
              ],
              areaSize: [
                {selector: 'showPersona'}
              ],
              color: [
                {selector: 'showPersonaColor'}
              ]
            },
            time: {
              axis: [
                {selector: 'time'} // TODO
              ],
              areaSize: [
                {selector: 'timeAreaSize'} // TODO
              ]
            },
            height: {
              axis: [
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
              color: [
                {selector: 'person.favoriteActivityColor'}
              ]
            },
            ageGroup: {
              axis: [
                {selector: 'person.ageGroup'}
              ],
              areaSize: [
                {selector: 'person.ageGroupAreaSize'}
              ]
            },
            zipCode: {
              axis: [
                {selector: 'person.latlng'}
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
            dataVariable: 'favoriteActivity',
            graphicVariableType: 'color',
            graphicVariableId: 'color'
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
          drawGridLines: true
        },
        graphicSymbols: {
          points: 'runPoints'
        }
      }, this),
      new GeomapVisualization({
        id: 'GM01',
        template: 'geomap',
        properties: {
          stateDefaultColor: 'white',
          stateDefaultStrokeColor: '#bebebe'
        },
        graphicSymbols: {
          points: 'runPoints'
          // TODO: Add states
        }
      }, this),
    ];
  }
}
