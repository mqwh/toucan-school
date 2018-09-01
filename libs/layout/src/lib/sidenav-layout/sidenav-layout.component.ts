import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { LoadNavigationMenu } from '../+state/layout.actions';

@Component({
  selector: 'tc-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:use-host-property-decorator
  host: { class: 'tc-sidenav-layout' }
})
export class SidenavLayoutComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadNavigationMenu());
  }
}
