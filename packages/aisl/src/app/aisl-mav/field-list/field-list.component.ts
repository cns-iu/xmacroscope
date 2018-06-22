import { Component, Input } from '@angular/core';

import { Field } from '@ngx-dino/core';
import { RunFields } from '../fields';

@Component({
  selector: 'aisl-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.sass']
})
export class FieldListComponent {
  @Input() fields: Field<any>[] = [
    RunFields.timeMillis,
    RunFields.persona.height,
    RunFields.persona.siblings,
    RunFields.persona.age_group,
    RunFields.persona.zipcode
  ];

  constructor() { }
}
