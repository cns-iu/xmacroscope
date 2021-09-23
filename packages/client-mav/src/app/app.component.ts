import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AISL xMacroscope';
  routeLinks: { label: string; route: string; index: string }[];
  showAppHeader = true;

  constructor(route: ActivatedRoute, public dataService: XMacroscopeDataService) {
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
        this.showAppHeader = q['showAppHeader'] === 'true';
      } else if (Object.keys(q).length === 0) {
        this.showAppHeader = true;
      }
    });
  }
}
