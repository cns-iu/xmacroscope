import { Observable } from 'rxjs/Observable';
import { Component, Input } from '@angular/core';

import { Field, RawChangeSet } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import { RunFields } from '../fields';

@Component({
  selector: 'aisl-color-legend',
  templateUrl: './color-legend.component.html',
  styleUrls: ['./color-legend.component.sass']
})
export class ColorLegendComponent {
  dataStream: Observable<RawChangeSet>;

  @Input() colorField: Field<any> = RunFields.fixed;

  fields = RunFields;

  constructor(service: SharedDataService) {
    this.dataStream = service.createStream();
  }
}
