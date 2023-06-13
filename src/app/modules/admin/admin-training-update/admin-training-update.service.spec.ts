import { TestBed } from '@angular/core/testing';

import { AdminTrainingUpdateService } from './admin-training-update.service';

describe('AdminTrainingUpdateService', () => {
  let service: AdminTrainingUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTrainingUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
