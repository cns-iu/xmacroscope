import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { PageMenuComponent } from './page-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatDividerModule,
    MatIconModule,

    SharedModule
  ],
  declarations: [PageMenuComponent],
  exports: [PageMenuComponent]
})
export class PageMenuModule {
  constructor(
    registry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    // Register icons needed by components
    registry.addSvgIconInNamespace(
      'menu', 'data-storage',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/data-storage.svg')
    );
    registry.addSvgIconInNamespace(
      'menu', 'data-distributions',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/data-distributions.svg')
    );
  }
}