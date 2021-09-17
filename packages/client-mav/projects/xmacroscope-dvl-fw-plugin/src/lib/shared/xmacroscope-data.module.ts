import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { XMacroscopeDataService } from './xmacroscope-data.service';
import { XMacroscopeProject, XMacroscopeProjectConfig } from './xmacroscope-project';
import { XMacroscopeProjectConfigService } from './xmacroscope-project-config.service';

export function configFactory(config: XMacroscopeProjectConfig) {
  return () => XMacroscopeProject.resolveConfig(config);
}

// @dynamic
@NgModule()
export class XMacroscopeDataModule {
  static forRoot(config: XMacroscopeProjectConfig): ModuleWithProviders<XMacroscopeDataModule> {
    return {
      ngModule: XMacroscopeDataModule,
      providers: [
        XMacroscopeDataService,
        {
          provide: XMacroscopeProjectConfigService,
          useValue: config
        },
        {
          provide: APP_INITIALIZER,
          useFactory: configFactory,
          deps: [XMacroscopeProjectConfigService],
          multi: true
        }
      ]
    };
  }
}
