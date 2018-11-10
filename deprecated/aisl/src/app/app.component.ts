import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  showAppHeader = true;

  routeLinks: any[];

  constructor(private router: Router, private route: ActivatedRoute) {
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
