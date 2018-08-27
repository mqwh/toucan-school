import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesModule, PathNotFoundComponent } from '@toucan/common';

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
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: 'disabled'
    }),

    PagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
