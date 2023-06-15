import { Component, OnInit } from '@angular/core';
import { AdminTrainingUpdate } from './model/adminTrainingUpdate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminTrainingUpdateService } from './admin-training-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-training-update',
  templateUrl: './admin-training-update.component.html',
  styleUrls: ['./admin-training-update.component.scss']
})
export class AdminTrainingUpdateComponent implements OnInit {

  training!: AdminTrainingUpdate;
  trainingForm!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private adminTrainingUpdateService: AdminTrainingUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getTraining();

    this.trainingForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      categoryId: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(4)]],
      level: ['', [Validators.required, Validators.minLength(4)]],
      slug: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  getTraining(){
    let id = Number(this.router.snapshot.params['id']);
    this.adminTrainingUpdateService.getTraining(id)
      .subscribe(training => this.mapFormValues(training));
  }

  submit(){
    let id = Number(this.router.snapshot.params['id']);
    this.adminTrainingUpdateService.savePost(id, {
      name: this.trainingForm.get('name')?.value,
      categoryId: this.trainingForm.get('categoryId')?.value,
      content: this.trainingForm.get('content')?.value,
      level: this.trainingForm.get('level')?.value,
      slug: this.trainingForm.get('slug')?.value,
    } as AdminTrainingUpdate).subscribe(training => {
      this.mapFormValues(training);
      this.snackBar.open("Training plan has been saved", '', {duration: 3000});
    });
  }

  private mapFormValues(training: AdminTrainingUpdate): void {
    return this.trainingForm.setValue({
      name: training.name,
      categoryId: training.categoryId,
      content: training.content,
      level: training.level,
      slug: training.slug
    });
  }
}
