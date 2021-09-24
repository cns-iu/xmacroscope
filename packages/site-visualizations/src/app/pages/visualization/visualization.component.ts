import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Visualization } from 'src/app/core/state/visualizations/visualizations';


// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnDestroy {
  visualization?: Visualization;

  private readonly subscriptions = new Subscription();

  constructor(route: ActivatedRoute) {
    const sub = route.data.subscribe(data => {
      this.visualization = data.visualization;
    });
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
