import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,

    AboutRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
