import { Component, Input, OnInit } from '@angular/core';

import { BoundField } from '@ngx-dino/core';

@Component({
  selector: 'aisl-persona',
  templateUrl: './aisl-persona.component.html',
  styleUrls: ['./aisl-persona.component.sass']
})
export class AislPersonaComponent implements OnInit {
  @Input() color: any;
  @Input() shape: any;
  constructor() {
  }

  ngOnInit() {
  }

}
