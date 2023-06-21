import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransformationAddService } from './transformation-add.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transformation } from '../model/transformation';

@Component({
  selector: 'app-transformation-add',
  templateUrl: './transformation-add.component.html',
  styleUrls: ['./transformation-add.component.scss']
})
export class TransformationAddComponent {

  @Input() transformationForm!: FormGroup;

  requiredFileTypes = "image/jpeg, image/png";
  imageBeforeForm!: FormGroup;
  imageAfterForm!: FormGroup;
  imageBefore: string | null = null;
  imageAfter: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private transformationAddService: TransformationAddService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.transformationForm = this.formBuilder.group({
      weightBefore: ['', [Validators.required, Validators.min(1)]],
      weightAfter: ['', [Validators.required, Validators.min(1)]],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
    this.imageBeforeForm = this.formBuilder.group({
      file: ['']
    });
    this.imageAfterForm = this.formBuilder.group({
      file: ['']
    });
  }

  submit() {
    this.transformationAddService.saveNewTransformation({
      weightBefore: this.transformationForm.get('weightBefore')?.value,
      weightAfter: this.transformationForm.get('weightAfter')?.value,
      duration: this.transformationForm.get('duration')?.value,
      imageBefore: this.imageBefore,
      imageAfter: this.imageAfter
    } as Transformation)
      .subscribe(transformation => {
        this.router.navigate(["/transformations"])
          .then(() => this.snackBar.open("Your transformation has been saved", "", { duration: 3000 }))
      })
  }

  uploadImageBefore() {
    let formData = new FormData();
    formData.append('file', this.imageBeforeForm.get('file')?.value);
    this.transformationAddService.uploadImage(formData)
      .subscribe(result => this.imageBefore = result.filename);
  }

  uploadImageAfter() {
    let formData = new FormData();
    formData.append('file', this.imageAfterForm.get('file')?.value);
    this.transformationAddService.uploadImage(formData)
      .subscribe(result => this.imageAfter = result.filename);
  }

  onImageBeforeChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageBeforeForm.patchValue({
        file: event.target.files[0]
      });
    }
  }

  onImageAfterChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageAfterForm.patchValue({
        file: event.target.files[0]
      });
    }
  }
}

