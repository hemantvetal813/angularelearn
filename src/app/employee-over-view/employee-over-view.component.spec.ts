import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOverViewComponent } from './employee-over-view.component';

describe('EmployeeOverViewComponent', () => {
  let component: EmployeeOverViewComponent;
  let fixture: ComponentFixture<EmployeeOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
