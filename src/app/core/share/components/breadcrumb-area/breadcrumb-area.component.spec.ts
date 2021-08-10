import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbAreaComponent } from './breadcrumb-area.component';

describe('BreadcrumbAreaComponent', () => {
  let component: BreadcrumbAreaComponent;
  let fixture: ComponentFixture<BreadcrumbAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
