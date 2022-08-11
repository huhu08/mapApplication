import { TestBed } from '@angular/core/testing';

import { PinApiService } from './pin-api.service';

describe('PinApiService', () => {
  let service: PinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
