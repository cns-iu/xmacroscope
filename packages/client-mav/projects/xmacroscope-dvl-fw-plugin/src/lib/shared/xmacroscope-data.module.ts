import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';

import { XMacroscopeProjectConfig, XMacroscopeProject } from './xmacroscope-project';
import { XMacroscopeDataService } from './xmacroscope-data.service';
import { XMacroscopeProjectConfigService } from './xmacroscope-project-config.service';
import { LocationSettings } from '../graphql/location-settings';

export function configFactory(config: XMacroscopeProjectConfig) {
  return () => XMacroscopeProject.resolveConfig(config);
}

// @dynamic
@NgModule()
export class XMacroscopeDataModule {
  static forRoot(config: XMacroscopeProjectConfig): ModuleWithProviders {
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
