import { TestBed } from '@angular/core/testing';

import { TposerviceService } from './tposervice.service';

describe('TposerviceService', () => {
  let service: TposerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TposerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
