import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { NgxsModule } from '@ngxs/store';

import { LayoutState } from '../+state/layout.state';
import { LayoutModule } from '../layout.module';

import { TabnavLayoutComponent } from './tabnav-layout.component';

@NgModule({
  imports: [LayoutModule, MatTabsModule, NgxsModule.forFeature([LayoutState])],
  declarations: [TabnavLayoutComponent],
  exports: [LayoutModule, TabnavLayoutComponent]
})
export class TabnavLayoutModule {}
