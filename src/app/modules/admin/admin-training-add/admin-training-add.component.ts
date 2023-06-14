import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminTrainingAddService } from './admin-training-add.service';

@Component({
  selector: 'app-admin-training-add',
  templateUrl: './admin-training-add.component.html',
  styleUrls: ['./admin-training-add.component.scss']
})
export class AdminTrainingAddComponent implements OnInit {

  trainingForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminTrainingAddService: AdminTrainingAddService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.trainingForm = this.formBuilder.group({
      name: [''],
      category: [''],
      content: [''],
      level: ['']
    });
  }

  submit(){
    this.adminTrainingAddService.saveNewTraining(this.trainingForm.value)
    .subscribe(training => {
      this.router.navigate(["/admin/trainings/update", training.id])
        .then(() => this.snackBar.open("New training has been saved", "", {duration:3000}))
    })
  }
}
