import { TestBed, inject } from '@angular/core/testing';

import { EspnService } from './espn.service';

describe('EspnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspnService]
    });
  });

  it('should be created', inject([EspnService], (service: EspnService) => {
    expect(service).toBeTruthy();
  }));
});
