import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  routeLinks: any[];

  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Home',
        route: '/',
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
  }
}
