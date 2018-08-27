import { TestBed, inject } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));

  it('能获取菜单数据', inject([MenuService], async (service: MenuService) => {
    await service.loadNavMenu('sidenav').forEach(menu => {
      expect(menu.key).toEqual('root');
      expect(menu.children && menu.children.length).toBeGreaterThan(0);
    });
  }));
});
