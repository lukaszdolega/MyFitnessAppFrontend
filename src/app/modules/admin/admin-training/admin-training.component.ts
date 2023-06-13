import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AdminComponent } from '../admin.component';
import { AdminTraining } from './model/adminTraining';
import { AdminTrainingService } from './admin-training.service';
import { startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-admin-training',
  templateUrl: './admin-training.component.html',
  styleUrls: ['./admin-training.component.scss']
})
export class AdminTrainingComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ["id", "name", "category", "content", "level", "actions"]
  totalElements: number = 0;
  data: AdminTraining[] = [];

  constructor(private adminTrainingService: AdminTrainingService) { }
  
  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminTrainingService.getTrainings(this.paginator.pageIndex, this.paginator.pageSize);
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.data = data.content;
    });
  }
}

