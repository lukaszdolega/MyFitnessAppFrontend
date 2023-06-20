import { TestBed } from '@angular/core/testing';

import { TransformationAddService } from './transformation-add.service';

describe('TransformationAddService', () => {
  let service: TransformationAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformationAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
