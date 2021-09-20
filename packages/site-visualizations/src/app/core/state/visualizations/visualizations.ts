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
    title: 'Visualization 1',
    description: 'Visualization 1',
    spec: 'assets/pages/vis1/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  },
  {
    id: 'vis2',
    title: 'Visualization 2',
    description: 'Visualization 2',
    spec: 'assets/pages/vis2/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  },
  {
    id: 'vis3',
    title: 'Visualization 3',
    description: 'Visualization 3',
    spec: 'assets/pages/vis3/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  },
  {
    id: 'vis4',
    title: 'Visualization 4',
    description: 'Visualization 4',
    spec: 'assets/pages/vis4/vis.vl.json',
    options: {},
    content: 'test',
    sql: 'test',
    csv: 'test'
  }
];