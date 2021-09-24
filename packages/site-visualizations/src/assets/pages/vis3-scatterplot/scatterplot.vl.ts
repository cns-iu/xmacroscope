import { VisualizationSpec } from 'vega-embed';

export interface VisControls {
  xAxis: string;
  yAxis: string;
  shape?: string;
  size?: string;
}

export function createScatterplot(visControls: VisControls): VisualizationSpec {
  return {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
      url: 'assets/generated/combined-data.csv',
      format: {
        type: 'csv'
      }
    },
    config: {
      legend: {
        labelFontSize: 15,
        symbolSize: 200
      },
      axis: {
        labelFontSize: 16,
        titleFontSize: 20,
        labelPadding: 15,
        grid: true,
        labelAngle: 0
      }
    },
    padding: { top: 30, bottom: 30 },
    height: 770,
    width: 1,
    mark: 'point',
    params: [
      {
        name: 'eventName',
        select: { type: 'point', fields: ['EVENT'] },
        bind: 'legend'
      },
      {
        name: 'shape',
        select: { type: 'point', fields: [visControls.shape ?? ''] },
        bind: 'legend'
      }
    ],
    transform: [
      {
        filter: 'datum.height < 100'
      },
      {
        filter: '!(datum.EVENT === "Sciencefest 2019" && datum.id < 182)'
      }
    ],
    encoding: {
      x: {
        title: visControls.xAxis === 'height' ? 'Height (inches)' : visControls.xAxis,
        field: visControls.xAxis,
        type: visControls.xAxis === 'Age Group' ? 'nominal' : 'quantitative',
        sort: ['Kid', 'Pre-Teen', 'Teen', 'Adult', 'Retired', '']
      },
      y: {
        title: visControls.yAxis === 'height' ? 'Height (inches)' : visControls.yAxis,
        field: visControls.yAxis,
        type: visControls.yAxis === 'Age Group' ? 'nominal' : 'quantitative',
        sort: ['', 'Retired', 'Adult', 'Teen', 'Pre-Teen', 'Kid']
      },
      fill: { field: 'EVENT', type: 'nominal' },
      shape: visControls.shape ? { field: visControls.shape, type: 'nominal', legend: { title: visControls.shape === 'gender' ? 'Gender' : visControls.shape } } : { value: 'circle' },
      size: visControls.size ? { field: visControls.size, type: 'quantitative', scale: { rangeMax: 1000 }, legend: { title: visControls.size === 'height' ? 'Height (inches)' : visControls.size } } : { value: 1000 },
      opacity: {
        condition: {
          test: {
            and: [
              { param: 'eventName' },
              { param: 'shape' }
            ]
          },
          value: 0.5
        },
        value: 0
      }
    }
  };
}
