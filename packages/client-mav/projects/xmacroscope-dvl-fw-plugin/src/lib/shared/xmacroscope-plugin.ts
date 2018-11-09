// refer https://angular.io/guide/styleguide#style-03-06 for import line spacing
import { ObjectFactoryPlugin, ObjectFactoryRegistry } from '@dvl-fw/core';
import { XMacroscopeDataSourceFactory } from './xmacroscope-data-source';


export class XMacroscopePlugin implements ObjectFactoryPlugin {
  register(registry: ObjectFactoryRegistry) {
    registry.registerObjectFactory(new XMacroscopeDataSourceFactory());
  }
}
