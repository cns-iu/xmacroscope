import { Observable } from 'rxjs/Observable';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Field, RawChangeSet } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import { RunFields } from '../fields';

@Component({
  selector: 'aisl-size-legend',
  templateUrl: './size-legend.component.html',
  styleUrls: ['./size-legend.component.sass']
})
export class SizeLegendComponent {
  dataStream: Observable<RawChangeSet>;

  @Input() sizeField: Field<any> = RunFields.fixed;
  @Input() shapeField: Field<any> = RunFields.fixed; // not in use currently

  fields = RunFields;

  constructor(service: SharedDataService) {
    this.dataStream = service.createStream();
  }
}
