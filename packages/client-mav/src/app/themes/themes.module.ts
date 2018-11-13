import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkThemeComponent } from './dark-theme/dark-theme.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ DarkThemeComponent ],
  declarations: [ DarkThemeComponent ]
})
export class ThemesModule { }
