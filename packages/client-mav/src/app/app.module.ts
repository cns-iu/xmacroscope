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

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatToolbarModule,

    AppRoutingModule,
    BackendModule,
    EndlineModule,
    HomeModule,
    MakeAVisModule,
    ThemesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
