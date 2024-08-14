import { TestBed } from '@angular/core/testing';

import { LeaverequestsService } from './leaverequests.service';

describe('LeaverequestsService', () => {
  let service: LeaverequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaverequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
