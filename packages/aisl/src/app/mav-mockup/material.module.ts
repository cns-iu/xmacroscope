import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSidenavModule, MatRadioModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatSidenavModule, MatRadioModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule ],
  exports: [ MatButtonModule, MatSidenavModule, MatRadioModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule ],
})
export class MaterialModule { }
