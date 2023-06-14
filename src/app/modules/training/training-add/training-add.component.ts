import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingAddService } from './training-add.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-training-add',
  templateUrl: './training-add.component.html',
  styleUrls: ['./training-add.component.scss']
})
export class TrainingAddComponent implements OnInit {

  trainingForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private trainingAddService: TrainingAddService,
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
    this.trainingAddService.saveNewTraining(this.trainingForm.value)
    .subscribe(training => {
      this.router.navigate(["/trainings"])
        .then(() => this.snackBar.open("New training has been saved", "", {duration:3000}))
    })
  }
}