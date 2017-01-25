/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerialService } from './serial.service';

describe('SerialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerialService]
    });
  });

  it('should ...', inject([SerialService], (service: SerialService) => {
    expect(service).toBeTruthy();
  }));
});
