import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RunFields } from '../fields';

@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  encodingFields = [
    RunFields.timeMillis,
    RunFields.persona.height,
    RunFields.persona.siblings,
    RunFields.persona.age_group,
    RunFields.persona.zipcode
  ];
  sizeField = RunFields.persona.age_group;
  colorField = RunFields.timeMillis;
  scatterPlotX = RunFields.timeMillis;
  scatterPlotY = RunFields.persona.height;

  constructor() { }
  ngOnInit() { }
}
