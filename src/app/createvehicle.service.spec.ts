import { TestBed } from '@angular/core/testing';

import { CreatevehicleService } from './createvehicle.service';

describe('CreatevehicleService', () => {
  let service: CreatevehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatevehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
