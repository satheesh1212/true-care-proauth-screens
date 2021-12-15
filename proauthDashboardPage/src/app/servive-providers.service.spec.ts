import { TestBed } from '@angular/core/testing';

import { ServiveProvidersService } from './servive-providers.service';

describe('ServiveProvidersService', () => {
  let service: ServiveProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiveProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
