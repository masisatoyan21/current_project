import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalendarComponent } from './dalendar.component';

describe('DalendarComponent', () => {
  let component: DalendarComponent;
  let fixture: ComponentFixture<DalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
