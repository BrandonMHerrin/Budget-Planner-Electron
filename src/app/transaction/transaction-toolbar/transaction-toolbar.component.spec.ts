import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionToolbarComponent } from './transaction-toolbar.component';

describe('TransactionToolbarComponent', () => {
  let component: TransactionToolbarComponent;
  let fixture: ComponentFixture<TransactionToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionToolbarComponent]
    });
    fixture = TestBed.createComponent(TransactionToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
