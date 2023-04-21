import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoafterloginComponent } from './tpoafterlogin.component';

describe('TpoafterloginComponent', () => {
  let component: TpoafterloginComponent;
  let fixture: ComponentFixture<TpoafterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpoafterloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpoafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
