import { TestBed } from '@angular/core/testing';

import { AdminTrainingAddService } from './admin-training-add.service';

describe('AdminTrainingAddService', () => {
  let service: AdminTrainingAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTrainingAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
