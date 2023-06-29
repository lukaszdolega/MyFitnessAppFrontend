import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingAddService } from './training-add.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormCategoryService } from '../../admin/admin-training/admin-training-form/form-category.service';
import { CategoryDto } from './model/categoryDto';
import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-training-add',
  templateUrl: './training-add.component.html',
  styleUrls: ['./training-add.component.scss']
})
export class TrainingAddComponent implements OnInit {

  trainingForm!: FormGroup;
  categories: Array<CategoryDto> = [];

  constructor(
    private formBuilder: FormBuilder,
    private trainingAddService: TrainingAddService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formCategoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.getCategories();

    this.trainingForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      categoryId: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(4)]],
      level: ['', [Validators.required, Validators.minLength(4)]],
      slug: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submit(){
    this.trainingAddService.saveNewTraining(this.trainingForm.value)
    .subscribe(training => {
      this.router.navigate(["/trainings"])
        .then(() => this.snackBar.open("New training has been saved", "", {duration:3000}))
    })
  }

  getCategories(){
    this.formCategoryService.getCategories()
    .subscribe(categories => this.categories = categories);
}

  get name(){
    return this.trainingForm.get("name");
  }

  get categoryId(){
    return this.trainingForm.get("categoryId");
  }

  get content(){
    return this.trainingForm.get("content");
  }

  get level(){
    return this.trainingForm.get("level");
  }

  get slug(){
    return this.trainingForm.get("slug");
  }
}