import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendModule } from './backend/backend.module';
import { EndlineModule } from './endline/endline.module';
import { HomeModule } from './home/home.module';
import { MakeAVisModule } from './make-a-vis/make-a-vis.module';
import { IconRegistryState } from './shared/state/icon-registry/icon-registry.state';
import { ThemesModule } from './themes/themes.module';
import { XMacroscopeDataModule, VisualizationsModule, XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatToolbarModule,

    NgxsModule.forRoot([IconRegistryState], { developmentMode: !environment.production }),
    XMacroscopeDataModule.forRoot(environment.projectConfiguration),
    VisualizationsModule,

    AppRoutingModule,
    BackendModule,
    EndlineModule,
    HomeModule,
    MakeAVisModule,
    ThemesModule
  ],
  providers: [ XMacroscopeDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
