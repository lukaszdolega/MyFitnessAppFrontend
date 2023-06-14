import { TestBed } from '@angular/core/testing';

import { TrainingDetailsService } from './training-details.service';

describe('TrainingDetailsService', () => {
  let service: TrainingDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
