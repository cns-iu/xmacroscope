import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    MatExpansionModule,

    AboutRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
