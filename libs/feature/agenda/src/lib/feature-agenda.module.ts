import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { RouterModule } from '@angular/router';

import { DATE_FORMATS } from '@toucan/common';

import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AgendaComponent }
    ])
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS }
  ],
  declarations: [AgendaComponent]
})
export class FeatureAgendaModule {}
