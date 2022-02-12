/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CifraService } from './cifra.service';

describe('Service: Cifra', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CifraService]
    });
  });

  it('should ...', inject([CifraService], (service: CifraService) => {
    expect(service).toBeTruthy();
  }));
});
