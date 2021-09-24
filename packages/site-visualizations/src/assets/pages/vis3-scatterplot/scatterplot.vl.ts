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
    autosize: {
      resize: true
    },
    height: 660,
    width: 950,
    config: {
      legend: {
        titleFontSize: 16,
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
    mark: 'point',
    params: [
      {
        name: 'eventName',
        select: { type: 'point', fields: ['Event'] },
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
        filter: 'datum.Height < 100'
      },
      {
        filter: '!(datum.Event === "Sciencefest 2019" && datum.id < 182)'
      }
    ],
    encoding: {
      x: {
        title: visControls.xAxis === 'Height' ? 'Height (inches)' : visControls.xAxis,
        field: visControls.xAxis,
        type: visControls.xAxis === 'Age Group' ? 'nominal' : 'quantitative',
        sort: ['Kid', 'Pre-Teen', 'Teen', 'Adult', 'Retired', '']
      },
      y: {
        title: visControls.yAxis === 'Height' ? 'Height (inches)' : visControls.yAxis,
        field: visControls.yAxis,
        type: visControls.yAxis === 'Age Group' ? 'nominal' : 'quantitative',
        sort: ['', 'Retired', 'Adult', 'Teen', 'Pre-Teen', 'Kid']
      },
      tooltip: [
        { field: 'id', title: 'ID', type: 'nominal' },
        { field: 'Event', title: 'Event', type: 'nominal' },
        { field: 'Age Group', title: 'Age Group', type: 'nominal' },
        { field: 'Gender', title: 'Gender', type: 'nominal'},
        { field: 'Height', title: 'Height (inches)', type: 'quantitative' },
        { field: 'state', title: 'State', type: 'nominal'},
        { field: 'Favorite Activity', title: 'Favorite Activity', type: 'nominal' },
        { field: 'Time (seconds)', title: 'Time (seconds)', type: 'quantitative' }
      ],
      fill: { field: 'Event', type: 'nominal' },
      shape: visControls.shape ? { field: visControls.shape, type: 'nominal', legend: { title: visControls.shape === 'Gender' ? 'Gender' : visControls.shape } } : { value: 'circle' },
      size: visControls.size ? { field: visControls.size, type: 'quantitative', scale: { rangeMax: 1000 }, legend: { title: visControls.size === 'Height' ? 'Height (inches)' : visControls.size } } : { value: 1000 },
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
