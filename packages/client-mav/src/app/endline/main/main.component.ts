import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-endline-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  showAppHeader = true;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((q) => {
      if ('showAppHeader' in q) {
        this.showAppHeader = q['showAppHeader'] === 'true';
      } else if (Object.keys(q).length === 0) {
        this.showAppHeader = true;
      }
    });
  }
}
