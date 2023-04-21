import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallstudentrecordsComponent } from './viewallstudentrecords.component';

describe('ViewallstudentrecordsComponent', () => {
  let component: ViewallstudentrecordsComponent;
  let fixture: ComponentFixture<ViewallstudentrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallstudentrecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallstudentrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
