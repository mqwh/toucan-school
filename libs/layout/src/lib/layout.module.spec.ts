import { TestBed, async } from '@angular/core/testing';

import { LayoutModule } from './layout.module';

describe('LayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutModule).toBeDefined();
  });
});
