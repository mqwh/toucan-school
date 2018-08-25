import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PathNotFoundComponent } from '@toucan/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/agenda' },
        {
          path: 'agenda',
          loadChildren: '@toucan/feature/agenda#FeatureAgendaModule'
        },
        { path: '**', component: PathNotFoundComponent }
      ],
      { useHash: true, initialNavigation: 'disabled' }
    )
  ],
  declarations: [PathNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
