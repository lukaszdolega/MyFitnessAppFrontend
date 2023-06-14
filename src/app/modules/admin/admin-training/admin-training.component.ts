import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AdminComponent } from '../admin.component';
import { AdminTraining } from './model/adminTraining';
import { AdminTrainingService } from './admin-training.service';
import { startWith, switchMap } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogService } from '../admin-confirm-dialog/admin-confirm-dialog.service';

@Component({
  selector: 'app-admin-training',
  templateUrl: './admin-training.component.html',
  styleUrls: ['./admin-training.component.scss']
})
export class AdminTrainingComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = ["id", "name", "category", "content", "level", "actions"]
  totalElements: number = 0;
  data: AdminTraining[] = [];

  constructor(
    private adminTrainingService: AdminTrainingService,
    private dialogService: AdminConfirmDialogService
    ){ }
  
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

  confirmDelete(element: AdminTraining){
    this.dialogService.openConfirmDialog("Are you sure you want to delete training plan?")
    .afterClosed()
    .subscribe(result => {
      if(result) {
        this.adminTrainingService.delete(element.id)
          .subscribe(() => {
            this.data.forEach((value, index) => {
              if(element == value) {
                this.data.splice(index, 1);
                this.table.renderRows();
              }
            })
          });
      }
    });
  }
}

