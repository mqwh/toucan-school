import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '../utils/module-import-guard';

import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PathNotFoundComponent],
  exports: [PathNotFoundComponent]
})
export class PagesModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: PagesModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'PagesModule');
  }
}
