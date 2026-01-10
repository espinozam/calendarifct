import { TestBed } from '@angular/core/testing';

import { CalendariService } from './calendari.service';

describe('CalendariService', () => {
  let service: CalendariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
