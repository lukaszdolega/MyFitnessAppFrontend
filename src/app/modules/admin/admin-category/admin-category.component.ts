import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminCategoryNameDto } from '../common/dto/adminCategoryNameDto';
import { AdminCategoryService } from './admin-category.service';
import { AdminConfirmDialogService } from '../admin-confirm-dialog/admin-confirm-dialog.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  displayedColumns: string[] = [ "id", "name", "actions"];
  data: Array<AdminCategoryNameDto> = [];
  
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private adminCategoryService: AdminCategoryService,
    private dialogService: AdminConfirmDialogService
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.adminCategoryService.getCategories()
      .subscribe(categories => this.data = categories);
  }

  confirmDelete(element: AdminCategoryNameDto) {
    this.dialogService.openConfirmDialog("Are you sure you want to delete category?")
    .afterClosed()
    .subscribe(result => {
      if(result) {
        this.adminCategoryService.delete(element.id)
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