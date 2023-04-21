import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TponavComponent } from './tponav.component';

describe('TponavComponent', () => {
  let component: TponavComponent;
  let fixture: ComponentFixture<TponavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TponavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TponavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
