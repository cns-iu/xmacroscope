import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RunFields, wrapFieldForShowPersona } from '../fields';

@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  personaIdField = RunFields.persona.id;
  encodingFields = [
    RunFields.persona.persona,
    RunFields.timeMillis,
    RunFields.persona.height,
    RunFields.persona.siblings,
    RunFields.persona.age_group,
    RunFields.persona.zipcode
  ].map(wrapFieldForShowPersona);
  sizeField = wrapFieldForShowPersona(RunFields.persona.siblings);
  colorField = wrapFieldForShowPersona(RunFields.fixed);
  shapeField = wrapFieldForShowPersona(RunFields.fixed);
  scatterPlotX = wrapFieldForShowPersona(RunFields.timeMillis);
  scatterPlotY = wrapFieldForShowPersona(RunFields.persona.height);

  constructor() {
  }
  ngOnInit() { }
}
