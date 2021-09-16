import { NgModule, Optional, SkipSelf } from '@angular/core';

import { PageMenuModule } from './components/page-menu/page-menu.module';
import { ThemeModule } from './services/theme/theme.module';
import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    // Services
    ThemeModule.forRoot(),
    StateModule,

    // Components
    PageMenuModule,
  ],
  exports: [
    // Module forwarding
    PageMenuModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() other: CoreModule | null) {
    if (other) {
      throw new Error('CoreModule should only be imported once in the AppModule!');
    }
  }
}