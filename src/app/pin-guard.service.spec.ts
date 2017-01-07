/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PinGuardService } from './pin-guard.service';

describe('PinGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PinGuardService]
    });
  });

  it('should ...', inject([PinGuardService], (service: PinGuardService) => {
    expect(service).toBeTruthy();
  }));
});
