import { Component, OnInit } from '@angular/core';
import { AdminTrainingUpdate } from './model/adminTrainingUpdate';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      name: [''],
      category: [''],
      content: [''],
      level: [''],
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
      category: this.trainingForm.get('category')?.value,
      content: this.trainingForm.get('content')?.value,
      level: this.trainingForm.get('level')?.value,
    } as AdminTrainingUpdate).subscribe(training => {
      this.mapFormValues(training);
      this.snackBar.open("Training plan has been saved", '', {duration: 3000});
    });
  }

  private mapFormValues(training: AdminTrainingUpdate): void {
    return this.trainingForm.setValue({
      name: training.name,
      category: training.category,
      content: training.content,
      level: training.level
    });
  }
}
