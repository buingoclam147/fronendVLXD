import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodShopComponent } from './method-shop.component';

describe('MethodShopComponent', () => {
  let component: MethodShopComponent;
  let fixture: ComponentFixture<MethodShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
