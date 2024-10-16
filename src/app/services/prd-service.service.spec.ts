import { TestBed } from '@angular/core/testing';

import { PrdServiceService } from './prd-service.service';

describe('PrdServiceService', () => {
  let service: PrdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
