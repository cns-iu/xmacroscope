import { NgModule, Type } from '@angular/core';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../../../environments/environment';
import { RouterState } from './router/router.state';
import { VisualizationsState } from './visualizations/visualizations.state';


const ROOT_STATES: Type<unknown>[] = [
  RouterState,
  VisualizationsState
];

@NgModule({
  imports: [
    // Note: Order of state modules is important!
    // The following described order MUST be maintained
    // 1. NgxsDataPluginModule - Must be before NgxsModule due to injection order bug
    // 2. NgxsModule
    // 3. NgxsStoragePluginModule
    // 4+. Other plugins
    // LAST. NgxsLoggerPluginModule
    NgxsDataPluginModule.forRoot(),
    NgxsModule.forRoot(ROOT_STATES, {
      developmentMode: !environment.production
    }),
    NgxsRouterPluginModule.forRoot(),
  ]
})
export class StateModule { }