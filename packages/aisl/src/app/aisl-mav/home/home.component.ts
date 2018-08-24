import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { RunFields, wrapFieldForShowPersona } from '../fields';
import { SharedDataService } from '../shared/shared-data.service';


@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  showAppHeader = true;
  datatableIdField = RunFields.id;
  encodingFields = [
    RunFields.persona.persona,
    RunFields.timeMillis,
    RunFields.persona.height,
    RunFields.persona.favoriteActivity,
    RunFields.persona.age_group,
    RunFields.persona.zipcode
  ].map(wrapFieldForShowPersona);
  sizeField = wrapFieldForShowPersona(RunFields.persona.age_group);
  colorField = wrapFieldForShowPersona(RunFields.fixed);
  strokeColorField = wrapFieldForShowPersona(RunFields.persona.favoriteActivity);
  shapeField = wrapFieldForShowPersona(RunFields.fixed);
  scatterPlotX = wrapFieldForShowPersona(RunFields.timeMillis);
  scatterPlotY = wrapFieldForShowPersona(RunFields.persona.height);

  constructor(private service: SharedDataService, private route: ActivatedRoute) {
    route.queryParams.subscribe((q) => {
      if ('showAppHeader' in q) {
        this.showAppHeader = q['showAppHeader'] === 'true' ? true : false;
      } else if (Object.keys(q).length === 0) {
        this.showAppHeader = true;
      }
    });
  }

  ngOnInit() { }

  restartStream(): void {
    this.service.start();
  }
}
