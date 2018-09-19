import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OFFICE_INITIALIZER } from '@toucan/data/access';
import { TabnavLayoutModule } from '@toucan/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsLibsModule } from './ngxs-libs.module';

@NgModule({
  imports: [
    // ng
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,

    // common
    NgxsLibsModule,

    // app
    TabnavLayoutModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [OFFICE_INITIALIZER],
  declarations: [AppComponent]
})
export class AppModule {}
