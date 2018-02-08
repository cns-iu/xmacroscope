import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { MessageService } from './shared/message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent],
  providers: [MessageService]
})
export class AislBackendModule { }
