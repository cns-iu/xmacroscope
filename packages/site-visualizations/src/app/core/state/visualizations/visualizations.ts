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
    description: 'Visualization 1',
    spec: 'assets/visualizations/vis1-age-time-heatmap/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  },
  {
    id: 'vis2',
    title: 'Height-Time Heatmap',
    description: 'Visualization 2',
    spec: 'assets/visualizations/vis2-height-time-heatmap/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  },
  {
    id: 'vis3',
    title: 'Scatterplot',
    description: 'Visualization 3',
    spec: 'assets/visualizations/vis3-scatterplot/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  },
  {
    id: 'vis4',
    title: 'Interactive Scatterplot',
    description: 'Visualization 4',
    spec: 'assets/visualizations/vis4-interactive-scatterplot/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  }
];