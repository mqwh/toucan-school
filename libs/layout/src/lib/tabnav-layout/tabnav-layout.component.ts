import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FlatNavItem } from '@toucan/data/models';
import { Observable } from 'rxjs';

import { LoadNavigationMenu } from '../+state/layout.actions';
import { LayoutState } from '../+state/layout.state';

@Component({
  selector: 'tc-tabnav-layout',
  templateUrl: './tabnav-layout.component.html',
  styleUrls: ['./tabnav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:use-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:use-host-property-decorator
  host: { class: 'tc-tabnav-layout mat-app-background mat-elevation-z1' }
})
export class TabnavLayoutComponent implements OnInit {
  @Select(LayoutState.menus)
  menus$!: Observable<FlatNavItem[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadNavigationMenu());
  }
}
