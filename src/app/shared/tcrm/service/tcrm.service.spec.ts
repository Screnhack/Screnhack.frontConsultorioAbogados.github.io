import { TestBed } from '@angular/core/testing';

import { TcrmService } from './tcrm.service';

describe('TcrmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TcrmService = TestBed.get(TcrmService);
    expect(service).toBeTruthy();
  });
});
