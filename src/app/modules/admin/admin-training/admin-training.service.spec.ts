import { TestBed } from '@angular/core/testing';

import { AdminTrainingService } from './admin-training.service';

describe('AdminTrainingService', () => {
  let service: AdminTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
