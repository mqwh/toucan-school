import { FlatNavItem } from '@toucan/data/models';

export class LoadNavigationMenu {
  static readonly type = '[Layout] Load navigation menu';
}

export class LoadNavigationMenuSuccess {
  static readonly type = '[Layout] Load navigation menu success';
  constructor(readonly rootMenu: FlatNavItem) {}
}
