import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-training-form',
  template: `
  <div [formGroup]="parentForm" fxLayout="column">
      <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Enter a training name" formControlName="name">
          <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="errorMessages">
                <div *ngIf="name?.errors?.['required']">
                    Name is required
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                    Name must have at least 4 characters
                </div>
            </div>
      </mat-form-field>

      <mat-form-field appearance="fill">
          <mat-label>Category</mat-label>
          <input matInput rows="20" placeholder="Enter a training category" formControlName="category">
          <div *ngIf="category?.invalid && (category?.dirty || category?.touched)" class="errorMessages">
                <div *ngIf="name?.errors?.['required']">
                Category is required
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                Category must have at least 4 characters
                </div>
            </div>
      </mat-form-field>

      <mat-form-field appearance="fill">
          <mat-label>Content</mat-label>
           <textarea matInput rows="20" placeholder="Enter a training content" formControlName="content"></textarea>
           <div *ngIf="content?.invalid && (content?.dirty || content?.touched)" class="errorMessages">
                <div *ngIf="name?.errors?.['required']">
                Content is required
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                Content must have at least 4 characters
                </div>
            </div>
      </mat-form-field>

      <mat-form-field appearance="fill">
          <mat-label>Level</mat-label>
          <input matInput placeholder="Enter a training level" formControlName="level">
          <div *ngIf="level?.invalid && (level?.dirty || level?.touched)" class="errorMessages">
                <div *ngIf="name?.errors?.['required']">
                Level is required
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                Level must have at least 4 characters
                </div>
            </div>
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

  get name(){
    return this.parentForm.get("name");
  }

  get category(){
    return this.parentForm.get("category");
  }

  get content(){
    return this.parentForm.get("content");
  }

  get level(){
    return this.parentForm.get("level");
  }
}
