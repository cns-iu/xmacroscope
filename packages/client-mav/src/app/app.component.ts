import { Component } from '@angular/core';
import { from } from 'rxjs';

import { XMacroscopeTemplateProject } from 'xmacroscope-dvl-fw-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'client-mav';
  constructor() {
    from(XMacroscopeTemplateProject.create(true)).subscribe(console.log);
  }
}
