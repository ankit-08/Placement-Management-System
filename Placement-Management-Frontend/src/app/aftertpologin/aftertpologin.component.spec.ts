import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftertpologinComponent } from './aftertpologin.component';

describe('AftertpologinComponent', () => {
  let component: AftertpologinComponent;
  let fixture: ComponentFixture<AftertpologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftertpologinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AftertpologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
