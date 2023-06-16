import { Component, OnInit } from '@angular/core';
import { TrainingDetails } from './model/trainingDetails';
import { TrainingDetailsService } from './training-details.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Review } from './model/review';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  training?: TrainingDetails;
  reviewForm!: FormGroup;

  constructor(
    private trainingDetailsService: TrainingDetailsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getProductDetails();
    this.reviewForm = this.formBuilder.group({
      authorName: ['', [Validators.required, Validators.minLength(2)]],
      content:  ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  getProductDetails() {
    let slug = this.router.snapshot.params['slug'];
    this.trainingDetailsService.getTrainingDetails(slug)
      .subscribe(training => this.training = training);
  }

  submit() {
    if(this.reviewForm.valid){
      this.trainingDetailsService.saveTrainingReview({
        authorName: this.reviewForm.get("authorName")?.value,
        content:  this.reviewForm.get("content")?.value,
        trainingId: this.training?.id
      } as Review).subscribe(review => {
        this.reviewForm.reset();
        this.snackBar.open('Your review has been added', '', { duration: 3000, panelClass: "snack-bar-bg-color-ok" });
      });
    }
  }

  get authorName() {
    return this.reviewForm.get('authorName');
  }

  get content() {
    return this.reviewForm.get('content');
  }
}
