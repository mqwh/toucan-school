import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';

// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot()
    // NgxsStoragePluginModule.forRoot({ key: ['settings.local'] })
  ],
  exports: [NgxsFormPluginModule]
})
export class NgxsLibsModule {}
