import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'tc-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaComponent implements OnInit {
  startDate = moment();

  constructor() {}

  ngOnInit() {}
}
