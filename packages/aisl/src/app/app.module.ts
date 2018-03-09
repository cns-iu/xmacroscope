import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AislBackendModule } from './aisl-backend';
import { AislEndlineModule } from './aisl-endline';
import { AislMavModule } from './aisl-mav';

import { AislGraphqlClientdbModule } from 'aisl-clientdb';
// import { AislGraphqlServerdbModule } from './aisl-backend/aisl-graphql-serverdb.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AislGraphqlClientdbModule,
    // AislGraphqlServerdbModule,
    AislBackendModule,
    AislEndlineModule,
    AislMavModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
