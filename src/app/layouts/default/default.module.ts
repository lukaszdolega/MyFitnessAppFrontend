import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { TrainingComponent } from 'src/app/modules/training/training.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainingAddComponent } from 'src/app/modules/training/training-add/training-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingDetailsComponent } from 'src/app/modules/training-details/training-details.component';
import { CategoryComponent } from 'src/app/modules/category/category.component';
import { TransformationComponent } from 'src/app/modules/transformation/transformation.component';
import { TransformationAddComponent } from 'src/app/modules/transformation/transformation-add/transformation-add.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    TrainingComponent,
    TrainingAddComponent,
    TrainingDetailsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class DefaultModule { }
