import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminTrainingComponent } from 'src/app/modules/admin/admin-training/admin-training.component';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminTrainingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class FullpageadminModule { }