/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputPwComponent } from './input-pw.component';

describe('InputPwComponent', () => {
  let component: InputPwComponent;
  let fixture: ComponentFixture<InputPwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
