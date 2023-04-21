import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddincomingcompanyComponent } from './addincomingcompany.component';

describe('AddincomingcompanyComponent', () => {
  let component: AddincomingcompanyComponent;
  let fixture: ComponentFixture<AddincomingcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddincomingcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddincomingcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
