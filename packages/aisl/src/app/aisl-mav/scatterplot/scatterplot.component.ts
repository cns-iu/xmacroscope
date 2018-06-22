import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { assign, mapValues, pick } from 'lodash';

import { Field, BoundField, RawChangeSet } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import * as commonFields from '../shared/common-fields';
import * as scatterplotFields from '../shared/scatterplot-fields';

import { RunFields } from '../fields';

@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass']
})
export class ScatterplotComponent implements OnInit {
  dataStream: Observable<RawChangeSet>;
  fields = RunFields;

  @Input() xField: Field<any> = RunFields.persona.height;
  @Input() yField: Field<any> = RunFields.timeMillis;
  @Input() pointSizeField: Field<any> = RunFields.timeMillis;
  @Input() pointShapeField: Field<any> = RunFields.fixed;
  @Input() pointColorField: Field<any> = RunFields.persona.age_group;

  width = window.innerWidth;
  height = 75 / 100 * window.innerHeight;
  autoresize = true;

  constructor(service: SharedDataService) {
    this.dataStream = service.dataStream;
  }

  ngOnInit() { }
}
