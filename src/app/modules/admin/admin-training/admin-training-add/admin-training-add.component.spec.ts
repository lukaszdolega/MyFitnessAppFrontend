import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingAddComponent } from './admin-training-add.component';

describe('AdminTrainingAddComponent', () => {
  let component: AdminTrainingAddComponent;
  let fixture: ComponentFixture<AdminTrainingAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTrainingAddComponent]
    });
    fixture = TestBed.createComponent(AdminTrainingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
