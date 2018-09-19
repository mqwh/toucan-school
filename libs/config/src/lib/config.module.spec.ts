import { TestBed, async } from '@angular/core/testing';

import { ConfigModule } from './config.module';

describe('ConfigModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfigModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConfigModule).toBeDefined();
  });
});
