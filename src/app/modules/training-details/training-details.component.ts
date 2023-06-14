import { Component, OnInit } from '@angular/core';
import { TrainingDetails } from './model/trainingDetails';
import { TrainingDetailsService } from './training-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  training?: TrainingDetails;

  constructor(
    private trainingDetailsService: TrainingDetailsService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    let slug = this.router.snapshot.params['slug'];
    this.trainingDetailsService.getTrainingDetails(slug)
      .subscribe(training => this.training = training);
  }
}
