import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminCategoryNameDto } from '../common/dto/adminCategoryNameDto';
import { FormCategoryService } from './form-category.service';

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
            <mat-label>Friendly url</mat-label>
            <input matInput placeholder="Enter url" formControlName="slug">
            <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)" class="erroMessages">
                <div *ngIf="slug?.errors?.['required']">
                  Name is required
                </div>
                <div *ngIf="slug?.errors?.['minlength']">
                  Name must have at least 4 characters
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Category</mat-label>
            <mat-select formControlName="categoryId">
                <mat-option *ngFor="let el of categories" [value]="1">
                {{el.name}}
                </mat-option>
            </mat-select>
            <div *ngIf="categoryId?.invalid && (categoryId?.dirty || categoryId?.touched)" class="erroMessages">
                <div *ngIf="categoryId?.errors?.['required']">
                Category is required
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

  categories: Array<AdminCategoryNameDto> = [];

    constructor(private formCategoryService: FormCategoryService){}

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories(){
        this.formCategoryService.getCategories()
        .subscribe(categories => this.categories = categories);
    }

  get name(){
    return this.parentForm.get("name");
  }

  get categoryId(){
    return this.parentForm.get("categoryId");
  }

  get content(){
    return this.parentForm.get("content");
  }

  get level(){
    return this.parentForm.get("level");
  }
  
  get slug(){
  return this.parentForm.get("slug");
  }
}
