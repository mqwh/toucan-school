import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PathNotFoundComponent } from '@toucan/common';

import { AppComponent } from './app.component';
import { NgxsLibsModule } from './ngxs-libs.module';

const routes = [
  { path: '', pathMatch: 'full', redirectTo: '/agenda' },
  {
    path: 'agenda',
    loadChildren: '@toucan/feature/agenda#FeatureAgendaModule'
  },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [
    // ng
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,

    // common
    NgxsLibsModule,

    // app
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'disabled'
    })
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, PathNotFoundComponent]
})
export class AppModule {}
