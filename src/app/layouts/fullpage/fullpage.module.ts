import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageComponent } from './fullpage.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { TransformationComponent } from 'src/app/modules/transformation/transformation.component';
import { TransformationAddComponent } from 'src/app/modules/transformation/transformation-add/transformation-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FullpageComponent,
    LoginComponent,
    TransformationComponent,
    TransformationAddComponent
  ]
  ,
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class FullpageModule { }
