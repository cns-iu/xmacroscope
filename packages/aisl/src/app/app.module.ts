import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AislBackendModule } from './aisl-backend';
import { AislEndlineModule } from './aisl-endline';
import { AislMavModule } from './aisl-mav';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AislBackendModule,
    AislEndlineModule,
    AislMavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
