import { TestBed } from '@angular/core/testing';

import { MouleService } from './moule.service';

describe('MouleService', () => {
  let service: MouleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
