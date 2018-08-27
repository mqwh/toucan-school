import { async, TestBed } from '@angular/core/testing';
import { DataModelsModule } from './data-models.module';

describe('DataModelsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataModelsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataModelsModule).toBeDefined();
  });
});
