import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScatterPlotDataService } from '../shared/scatterplot-data.service';
import { IField, Field, Changes } from '../../dino-core';

@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass'],
  providers: [ScatterPlotDataService]
})
export class ScatterplotComponent implements OnInit {
  xFields: IField<any>[];
  yFields: IField<any>[];
  colorFields: IField<string>[];
  shapeFields: IField<string>[];
  sizeFields: IField<string>[];
  dataStream: Observable<Changes<any>>;

  xField: IField<any>;
  yField: IField<any>;
  colorField: IField<string>;
  shapeField: IField<string>;
  sizeField: IField<string>;

  constructor(public massager: ScatterPlotDataService) {
    this.xFields = massager.xFields;
    this.yFields = massager.yFields;
    this.colorFields = massager.colorFields;
    this.shapeFields = massager.shapeFields;
    this.sizeFields = massager.sizeFields;
    this.xField = massager.xFields[0];
    this.yField = massager.yFields[1];
    this.colorField = massager.colorFields[0];
    this.shapeField = massager.shapeFields[0];
    this.sizeField = massager.sizeFields[0];
    this.dataStream = massager.dataStream;
  }

  ngOnInit() { }
}
