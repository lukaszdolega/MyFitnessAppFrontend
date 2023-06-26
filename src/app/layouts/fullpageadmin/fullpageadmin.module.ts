import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminTrainingComponent } from 'src/app/modules/admin/admin-training/admin-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTrainingUpdateComponent } from 'src/app/modules/admin/admin-training/admin-training-update/admin-training-update.component';
import { AdminTrainingAddComponent } from 'src/app/modules/admin/admin-training/admin-training-add/admin-training-add.component';
import { AdminTrainingFormComponent } from 'src/app/modules/admin/admin-training/admin-training-form/admin-training-form.component';
import { AdminCategoryComponent } from 'src/app/modules/admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from 'src/app/modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from 'src/app/modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { AdminCategoryFormConponent } from 'src/app/modules/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/common/component/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminReviewComponent } from 'src/app/modules/admin/admin-review/admin-review.component';
@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminTrainingComponent,
    AdminTrainingUpdateComponent,
    AdminTrainingAddComponent,
    AdminTrainingFormComponent,
    AdminConfirmDialogComponent,
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryUpdateComponent,
    AdminCategoryFormConponent,
    AdminReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }