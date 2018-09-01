import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

import { SidenavLayoutComponent } from './sidenav-layout.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule],
  declarations: [SidenavLayoutComponent],
  exports: [SidenavLayoutComponent]
})
export class SidenavLayoutModule {}
