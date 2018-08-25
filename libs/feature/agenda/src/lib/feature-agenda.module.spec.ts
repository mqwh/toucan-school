import { TestBed, async } from '@angular/core/testing';

import { FeatureAgendaModule } from './feature-agenda.module';

describe('FeatureAgendaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureAgendaModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureAgendaModule).toBeDefined();
  });
});
