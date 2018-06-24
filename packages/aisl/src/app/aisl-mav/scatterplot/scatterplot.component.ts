import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Field, RawChangeSet } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import { RunFields } from '../fields';

@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass']
})
export class ScatterplotComponent {
  dataStream: Observable<RawChangeSet>;
  fields = RunFields;

  @Input() xField: Field<any> = RunFields.fixed;
  @Input() yField: Field<any> = RunFields.fixed;
  @Input() pointSizeField: Field<any> = RunFields.fixed;
  @Input() pointShapeField: Field<any> = RunFields.fixed;
  @Input() pointColorField: Field<any> = RunFields.fixed;
  @Input() pointStrokeColorField: Field<any> = RunFields.fixed;

  width = window.innerWidth;
  height = 75 / 100 * window.innerHeight;
  autoresize = true;

  constructor(service: SharedDataService) {
    this.dataStream = service.dataStream;
  }
}
