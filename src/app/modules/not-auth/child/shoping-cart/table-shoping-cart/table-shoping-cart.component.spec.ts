/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableShopingCartComponent } from './table-shoping-cart.component';

describe('TableShopingCartComponent', () => {
  let component: TableShopingCartComponent;
  let fixture: ComponentFixture<TableShopingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShopingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
