import { NgModule, ModuleWithProviders } from '@angular/core';

import { XMacroscopeProjectConfig } from './xmacroscope-project';
import { XMacroscopeDataService } from './xmacroscope-data.service';
import { XMacroscopeProjectConfigService } from './xmacroscope-project-config.service';


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
        }
      ]
    };
  }
}
