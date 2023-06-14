import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { TrainingComponent } from './modules/training/training.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { LoginComponent } from './modules/login/login.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminTrainingComponent } from './modules/admin/admin-training/admin-training.component';
import { AdminTrainingUpdateComponent } from './modules/admin/admin-training-update/admin-training-update.component';
import { AdminTrainingAddComponent } from './modules/admin/admin-training-add/admin-training-add.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'trainings', component: TrainingComponent},

    ]
  },
  {
      path:'', component: FullpageComponent, children: [
        {path: 'login', component: LoginComponent}
      ]
    },
    {
      path:'', component: FullpageadminComponent, children: [
        {path: 'admin', component: AdminComponent},
        {path: 'admin/trainings', component: AdminTrainingComponent},
        {path: 'admin/trainings/update/:id', component: AdminTrainingUpdateComponent},
        {path: 'admin/trainings/add', component: AdminTrainingAddComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
