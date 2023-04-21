import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplacedstudentComponent } from './viewplacedstudent.component';

describe('ViewplacedstudentComponent', () => {
  let component: ViewplacedstudentComponent;
  let fixture: ComponentFixture<ViewplacedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewplacedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewplacedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
