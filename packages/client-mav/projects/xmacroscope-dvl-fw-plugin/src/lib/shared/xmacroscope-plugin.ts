import { ObjectFactoryPlugin, ObjectFactoryRegistry } from '@dvl-fw/core';

import { XMacroscopeDataSourceFactory } from './xmacroscope-data-source';


export class XMacroscopePlugin implements ObjectFactoryPlugin {
  register(registry: ObjectFactoryRegistry): void {
    registry.registerObjectFactory(new XMacroscopeDataSourceFactory());
  }
}
