import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent]
})
export class BackendModule { }
