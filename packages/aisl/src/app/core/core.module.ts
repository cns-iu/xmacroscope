import './rxjs-operators.ts';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlConnectionModule } from './graphql-connection.module';

@NgModule({
  imports: [
    CommonModule,
    GraphqlConnectionModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
