/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeService } from './employe.service';

describe('Service: Employe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeService]
    });
  });

  it('should ...', inject([EmployeService], (service: EmployeService) => {
    expect(service).toBeTruthy();
  }));
});
