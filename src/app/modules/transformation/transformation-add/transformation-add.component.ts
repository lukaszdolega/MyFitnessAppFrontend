import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransformationAddService } from './transformation-add.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-transformation-add',
  templateUrl: './transformation-add.component.html',
  styleUrls: ['./transformation-add.component.scss']
})
export class TransformationAddComponent {
  @Input() transformationForm!: FormGroup;
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
      imageBefore: ['', [Validators.required, Validators.minLength(4)]],
      imageAfter: ['', [Validators.required, Validators.minLength(4)]],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
  }

  submit(){
    this.transformationAddService.saveNewTransformation(this.transformationForm.value)
    .subscribe(transformation => {
      this.router.navigate(["/transformations"])
        .then(() => this.snackBar.open("Your transformation has been saved", "", {duration:3000}))
    })
  }

  get weightBefore(){
    return this.transformationForm.get("weightBefore");
  }

  get weightAfter(){
    return this.transformationForm.get("weightAfter");
  }

  get imageBefore(){
    return this.transformationForm.get("imageBefore");
  }

  get imageAfter(){
    return this.transformationForm.get("imageAfter");
  }

  get duration(){
    return this.transformationForm.get("duration");
  }
}

