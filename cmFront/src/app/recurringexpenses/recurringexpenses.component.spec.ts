import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringexpensesComponent } from './recurringexpenses.component';

describe('RecurringexpensesComponent', () => {
  let component: RecurringexpensesComponent;
  let fixture: ComponentFixture<RecurringexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringexpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
