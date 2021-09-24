import { Options } from 'ngx-vega';


export interface Visualization {
  title: string;
  description: string;
  spec: string;
  options: Options;
  content: string;
  sql: string;
  csv: string;
  id: string;
}

export const visualizations: Visualization[] = [
  {
    id: 'vis1',
    title: 'Age-Time Heatmap',
    description: 'Age/time comparison using combined data',
    spec: 'assets/pages/vis1-age-time-heatmap/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'assets/generated/combined-data.csv'
  },
  {
    id: 'vis2',
    title: 'Height-Time Heatmap',
    description: 'Height/time comparison using combined data',
    spec: 'assets/pages/vis2-height-time-heatmap/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'assets/generated/combined-data.csv'
  },
  {
    id: 'vis3',
    title: 'Scatterplot',
    description: 'Interactive scatterplot visualization to visualize data across event datasets',
    spec: 'assets/pages/vis3-scatterplot/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'assets/generated/combined-data.csv'
  },
  {
    id: 'vis4',
    title: 'Scatterplot Matrix',
    description: 'Interactive scatterplot matrix comparing time, height, and age group',
    spec: 'assets/pages/vis4-interactive-scatterplot/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'assets/generated/combined-data.csv'
  }
];
