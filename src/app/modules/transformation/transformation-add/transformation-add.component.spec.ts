import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationAddComponent } from './transformation-add.component';

describe('TransformationAddComponent', () => {
  let component: TransformationAddComponent;
  let fixture: ComponentFixture<TransformationAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationAddComponent]
    });
    fixture = TestBed.createComponent(TransformationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
