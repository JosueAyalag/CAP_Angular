import { TestBed } from '@angular/core/testing';

import { AudifonoService } from './audifono.service';

describe('AudifonoService', () => {
  let service: AudifonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudifonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
