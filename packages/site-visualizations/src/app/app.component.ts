import { ChangeDetectionStrategy, AfterViewInit, Component, HostBinding, NgZone, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

import { PageLink } from './core/models/pages.model';
import { RouterState } from './core/state/router/router.state';
import { visualizations } from './core/state/visualizations/visualizations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  @HostBinding('class') readonly clsName = 'app-root';

  @ViewChild(MatSidenavContainer)
  readonly sidenavContainer!: MatSidenavContainer;

  readonly menuHeader = 'xMacroscopes';
  readonly pages: PageLink[] = visualizations.map(v => ({
    path: v.id, title: v.title, description: v.description
  }));

  subBarVisible = true;
  menuOpen = false;

  showFiller = false;

  constructor(
    router: RouterState,
    private readonly zone: NgZone
  ) {
    router.navigationStart$.subscribe(() => {
      this.menuOpen = false;
    });
  }

  ngAfterViewInit(): void {
    // NOTE: Scrollable is not available in ngOnInit even if @ViewChild has `static: true`
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {
      // NOTE: This runs outside angular's zone
      // ALL modifications must be wrapped in calls to `this.zone.run` or related methods
      const offset = this.sidenavContainer.scrollable.measureScrollOffset('top');
      const visible = offset === 0;
      if (this.subBarVisible !== visible) {
        this.zone.run(() => {
          this.subBarVisible = visible;
        });
      }
    });
  }
}
