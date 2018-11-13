import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  theme = 'dark-theme';
  title = 'AISL xMacroscope';
  routeLinks: any[];
  showAppHeader = true;

  constructor(private router: Router, private route: ActivatedRoute, public dataService: XMacroscopeDataService) {
    console.log(dataService);
    this.routeLinks = [
      {
        label: 'Home',
        route: '/home',
        index: '0'
      },
      {
        label: 'Backend',
        route: '/backend',
        index: '1'
      },
      {
        label: 'Make A Vis',
        route: '/mav',
        index: '2'
      },
      {
        label: 'Endline',
        route: '/endline',
        index: '3'
      }
    ];

    route.queryParams.subscribe((q) => {
      if ('showAppHeader' in q) {
        this.showAppHeader = q['showAppHeader'] === 'true' ? true : false;
      } else if (Object.keys(q).length === 0) {
        this.showAppHeader = true;
      }
    });
  }
}

