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



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    TrainingComponent,
    TrainingAddComponent,
    TrainingDetailsComponent
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
