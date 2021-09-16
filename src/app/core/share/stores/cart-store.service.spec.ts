/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartStoreService } from './cart-store.service';

describe('Service: CartStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartStoreService]
    });
  });

  it('should ...', inject([CartStoreService], (service: CartStoreService) => {
    expect(service).toBeTruthy();
  }));
});
