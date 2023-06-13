import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingUpdateComponent } from './admin-training-update.component';

describe('AdminTrainingUpdateComponent', () => {
  let component: AdminTrainingUpdateComponent;
  let fixture: ComponentFixture<AdminTrainingUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTrainingUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminTrainingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
