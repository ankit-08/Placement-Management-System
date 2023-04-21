import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIncomingcompanybydeptComponent } from './viewincomingcompanybydept.component';

describe('ViewIncomingcompanybydeptComponent', () => {
  let component: ViewIncomingcompanybydeptComponent;
  let fixture: ComponentFixture<ViewIncomingcompanybydeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIncomingcompanybydeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIncomingcompanybydeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
