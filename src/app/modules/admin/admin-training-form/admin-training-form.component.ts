import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-training-form',
  template: `
  <div [formGroup]="parentForm" fxLayout="column">
      <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Enter a training name" formControlName="name">
      </mat-form-field>

      <mat-form-field appearance="fill">
          <mat-label>Category</mat-label>
          <input matInput rows="20" placeholder="Enter a training category" formControlName="category">
      </mat-form-field>

      <mat-form-field appearance="fill">
          <mat-label>Content</mat-label>
           <textarea matInput rows="20" placeholder="Enter a training content" formControlName="content"></textarea>
      </mat-form-field>

      <mat-form-field appearance="fill">
          <mat-label>Level</mat-label>
          <input matInput placeholder="Enter a training level" formControlName="level">
      </mat-form-field>

      <div fxLayoutAlign="end">
          <button mat-flat-button color="primary">Save</button>
      </div>
</div>`
})
export class AdminTrainingFormComponent implements OnInit {

  @Input() parentForm!: FormGroup;

  ngOnInit(): void {

  }
}
