import { Observable } from 'rxjs/Observable';
import { Component, Input } from '@angular/core';
import { Map } from 'immutable';

import { Field, RawChangeSet } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import { RunFields, sizeRange } from '../fields';

@Component({
  selector: 'aisl-color-legend',
  templateUrl: './color-legend.component.html',
  styleUrls: ['./color-legend.component.sass']
})
export class ColorLegendComponent {
  dataStream: Observable<RawChangeSet>;

  @Input() colorField: Field<any> = RunFields.fixed;

  labelToColor = Map<string, string>({
    'Ugh': 'green',
    'Why?': 'yellow'
  });

  fields = RunFields;
  sizeRange = sizeRange;

  constructor(service: SharedDataService) {
    this.dataStream = service.createStream();
  }
}
