import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensecategoriesComponent } from './expensecategories.component';

describe('ExpensecategoriesComponent', () => {
  let component: ExpensecategoriesComponent;
  let fixture: ComponentFixture<ExpensecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensecategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
