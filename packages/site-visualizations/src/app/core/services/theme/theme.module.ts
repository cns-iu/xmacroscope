import { APP_BOOTSTRAP_LISTENER, ComponentRef, ModuleWithProviders, NgModule } from '@angular/core';

import { THEME_OPTIONS, ThemeOptions, ThemeService } from './theme.service';


@NgModule({})
export class ThemeModule {
  static forRoot(options: ThemeOptions = {}): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: APP_BOOTSTRAP_LISTENER,
          useFactory(theme: ThemeService): (ref: ComponentRef<unknown>) => void {
            return ref => theme.addBootstrapComponent(ref);
          },
          deps: [ThemeService],
          multi: true
        },
        {
          provide: THEME_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
