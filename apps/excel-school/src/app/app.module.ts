import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { NgxsLibsModule } from './ngxs-libs.module';

@NgModule({
  imports: [
    // ng
    BrowserModule,
    BrowserAnimationsModule,

    // common
    NgxsLibsModule,

    // app
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
