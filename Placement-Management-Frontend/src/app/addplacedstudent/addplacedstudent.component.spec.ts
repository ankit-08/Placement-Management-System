import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplacedstudentComponent } from './addplacedstudent.component';

describe('AddplacedstudentComponent', () => {
  let component: AddplacedstudentComponent;
  let fixture: ComponentFixture<AddplacedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplacedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplacedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
