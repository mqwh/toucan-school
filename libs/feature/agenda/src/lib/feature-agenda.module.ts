import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AgendaComponent }
    ])
  ],
  declarations: [AgendaComponent]
})
export class FeatureAgendaModule {}
