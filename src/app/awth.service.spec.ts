import { TestBed } from '@angular/core/testing';

import { AwthService } from './awth.service';

describe('AwthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwthService = TestBed.get(AwthService);
    expect(service).toBeTruthy();
  });
});
