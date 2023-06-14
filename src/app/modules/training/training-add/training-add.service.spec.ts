import { TestBed } from '@angular/core/testing';

import { TrainingAddService } from './training-add.service';

describe('TrainingAddService', () => {
  let service: TrainingAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
