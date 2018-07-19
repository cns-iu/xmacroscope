import { Component, OnInit } from '@angular/core';

import { RunFields, wrapFieldForShowPersona } from '../fields';
import { SharedDataService } from '../shared/shared-data.service';


@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  datatableIdField = RunFields.id;
  encodingFields = [
    RunFields.persona.persona,
    RunFields.timeMillis,
    RunFields.persona.height,
    RunFields.persona.siblings,
    RunFields.persona.age_group,
    RunFields.persona.zipcode
  ].map(wrapFieldForShowPersona);
  sizeField = wrapFieldForShowPersona(RunFields.persona.siblings);
  colorField = wrapFieldForShowPersona(RunFields.persona.age_group);
  strokeColorField = wrapFieldForShowPersona(RunFields.persona.age_group);
  shapeField = wrapFieldForShowPersona(RunFields.fixed);
  scatterPlotX = wrapFieldForShowPersona(RunFields.timeMillis);
  scatterPlotY = wrapFieldForShowPersona(RunFields.persona.height);

  constructor(private service: SharedDataService) {
  }

  ngOnInit() { }

  restartStream(): void {
    this.service.start();
  }
}
