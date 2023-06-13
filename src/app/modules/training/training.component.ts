import { Component, OnInit } from '@angular/core';
import { Training } from './model/training';
import { TrainingService } from './training.service';
import { Page } from 'src/app/shared/model/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  
  page?: Page<Training>;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.getTrainings();  
  }

  getTrainings() {
    this.getTrainingPage(0, 10);
  }

  onPageEvent(event: PageEvent){
    this.getTrainingPage(event.pageIndex, event.pageSize);
  }

  private getTrainingPage(page: number, size: number){
    this.trainingService.getTrainings(page, size)
    .subscribe(page => this.page = page)
  }
}
