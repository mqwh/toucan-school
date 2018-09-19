import { TestBed, inject } from '@angular/core/testing';

import { ExcelTableService } from './excel-table.service';

describe('ExcelTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelTableService]
    });
  });

  it('should be created', inject([ExcelTableService], (service: ExcelTableService) => {
    expect(service).toBeTruthy();
  }));
});
