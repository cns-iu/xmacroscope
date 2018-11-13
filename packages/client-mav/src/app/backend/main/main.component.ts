import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-backend-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  showAppHeader = true;

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe((q) => {
      if ('showAppHeader' in q) {
        this.showAppHeader = q['showAppHeader'] === 'true' ? true : false;
      } else if (Object.keys(q).length === 0) {
        this.showAppHeader = true;
      }
    });
  }

  ngOnInit() {
  }

}
