import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendModule } from './backend/backend.module';
import { EndlineModule } from './endline/endline.module';
import { HomeModule } from './home/home.module';
import { MakeAVisModule } from './make-a-vis/make-a-vis.module';
import { ThemesModule } from './themes/themes.module';
import { XMacroscopeDataModule, XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatToolbarModule,

    XMacroscopeDataModule.forRoot(environment.projectConfiguration),

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
