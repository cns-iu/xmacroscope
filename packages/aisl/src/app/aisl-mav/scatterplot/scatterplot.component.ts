import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { assign, mapValues, pick } from 'lodash';

import { Field, RawChangeSet } from '@ngx-dino/core';
import { ScatterPlotDataService } from '../shared/scatterplot-data.service';
import { RunFields, wrapFieldForShowPersona } from '../fields';

@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass'],
  providers: [ScatterPlotDataService]
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

  constructor(service: ScatterPlotDataService) {
    console.log(this);
    this.dataStream = service.dataStream;
  }

  wrapField(field: Field<any>): Field<any> {
    if (field) {
      return wrapFieldForShowPersona(field);
    } else {
      return RunFields.persona.persona;
    }
  }

  ngOnInit() { }
}
