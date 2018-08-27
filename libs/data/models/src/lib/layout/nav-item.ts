export interface NavItem {
  key: string;
  url?: string;
  icon?: string;
  label?: string;
  order?: number;
  active?: boolean;
  opened?: boolean;
  alwaysOpen?: boolean;
}

export interface NestedNavItem extends NavItem {
  children?: NestedNavItem[];
}

export interface FlatNavItem extends NavItem {
  children?: FlatNavItem[];
}
