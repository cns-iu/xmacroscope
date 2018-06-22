import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { BoundField } from '@ngx-dino/core';

import { ScatterplotComponent } from '../scatterplot/scatterplot.component';
import { GeomapComponent } from '../geomap/geomap.component';
import { RunFields, wrapFieldsForShowPersona, wrapFieldForShowPersona } from '../fields';

@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
  encodingFields = wrapFieldsForShowPersona([
    RunFields.timeMillis,
    RunFields.persona.height,
    RunFields.persona.siblings,
    RunFields.persona.age_group,
    RunFields.persona.zipcode
  ]);
  sizeField = wrapFieldForShowPersona(RunFields.persona.age_group);
  colorField = wrapFieldForShowPersona(RunFields.timeMillis);

  constructor() { }
  ngOnInit() { }
}
