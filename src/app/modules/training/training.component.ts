import { Component, OnInit } from '@angular/core';
import { Training } from './model/training';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  trainings: Training[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.getTrainings();  
  }

  getTrainings() {
    this.trainingService.getTrainings()
    .subscribe(trainings => this.trainings = trainings);
  }
}
