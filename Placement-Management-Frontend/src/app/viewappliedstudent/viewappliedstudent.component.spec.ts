import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappliedstudentComponent } from './viewappliedstudent.component';

describe('ViewappliedstudentComponent', () => {
  let component: ViewappliedstudentComponent;
  let fixture: ComponentFixture<ViewappliedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappliedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappliedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
