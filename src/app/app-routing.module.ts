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
import { AdminTrainingUpdateComponent } from './modules/admin/admin-training/admin-training-update/admin-training-update.component';
import { AdminTrainingAddComponent } from './modules/admin/admin-training/admin-training-add/admin-training-add.component';
import { TrainingAddComponent } from './modules/training/training-add/training-add.component';
import { TrainingDetailsComponent } from './modules/training-details/training-details.component';
import { AdminCategoryComponent } from './modules/admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from './modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from './modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { CategoryComponent } from './modules/category/category.component';
import { AdminReviewComponent } from './modules/admin/admin-review/admin-review.component';
import { TransformationComponent } from './modules/transformation/transformation.component';
import { TransformationAddComponent } from './modules/transformation/transformation-add/transformation-add.component';
import { ChatComponent } from './modules/chat/chat.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'trainings', component: TrainingComponent},
      {path: 'trainings/add', component: TrainingAddComponent},
      {path: 'trainings/:slug', component: TrainingDetailsComponent},
      {path: 'categories/:slug', component: CategoryComponent},
    ]
  },
  {
      path:'', component: FullpageComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: 'transformations', component: TransformationComponent},
        {path: 'transformations/add', component: TransformationAddComponent},
        {path: 'chats', component: ChatComponent},
      ]
    },
    {
      path:'', component: FullpageadminComponent, children: [
        {path: 'admin', component: AdminComponent},
        {path: 'admin/trainings', component: AdminTrainingComponent},
        {path: 'admin/trainings/update/:id', component: AdminTrainingUpdateComponent},
        {path: 'admin/trainings/add', component: AdminTrainingAddComponent},
        {path: 'admin/categories', component: AdminCategoryComponent},
        {path: 'admin/categories/add', component: AdminCategoryAddComponent},
        {path: 'admin/categories/update/:id', component: AdminCategoryUpdateComponent},
        {path: 'admin/reviews', component: AdminReviewComponent},
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
