import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'aisl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
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
