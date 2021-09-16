/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InvoiceDetailService } from './invoice-detail.service';

describe('Service: InvoiceDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceDetailService]
    });
  });

  it('should ...', inject([InvoiceDetailService], (service: InvoiceDetailService) => {
    expect(service).toBeTruthy();
  }));
});
