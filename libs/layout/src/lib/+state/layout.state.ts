import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MenuService } from '@toucan/data/access';
import { map } from 'rxjs/operators';

import { FlatNavItem } from '@toucan/data/models';

import {
  LoadNavigationMenu,
  LoadNavigationMenuSuccess
} from './layout.actions';

export interface LayoutStateModel {
  layout: 'sidenav' | 'tabnav';
  rootMenu: FlatNavItem;
}

export const initialLayoutState: LayoutStateModel = {
  layout: 'sidenav',
  rootMenu: { key: 'root' }
};

@State<LayoutStateModel>({
  name: 'layout',
  defaults: initialLayoutState
})
export class LayoutState {
  @Selector()
  static menus(state: LayoutStateModel) {
    return state.rootMenu.children || [];
  }

  constructor(private menuService: MenuService) {}

  @Action(LoadNavigationMenu)
  loadNavigationMenu({ getState, dispatch }: StateContext<LayoutStateModel>) {
    const state = getState();
    return this.menuService
      .loadNavMenu(state.layout)
      .pipe(map(root => dispatch(new LoadNavigationMenuSuccess(root))));
  }

  @Action(LoadNavigationMenuSuccess)
  loadNavigationMenuSuccess(
    { patchState }: StateContext<LayoutStateModel>,
    { rootMenu }: LoadNavigationMenuSuccess
  ) {
    return patchState({ rootMenu });
  }
}
