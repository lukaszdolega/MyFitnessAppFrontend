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
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { FullpageadminemptyComponent } from './layouts/fullpageadminempty/fullpageadminempty.component';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';
import { LostPasswordComponent } from './modules/login/lost-password/lost-password.component';


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
        {path: 'lostPassword', component: LostPasswordComponent},
        {path: 'lostPassword/:hash', component: LostPasswordComponent},
        {path: 'transformations', component: TransformationComponent},
        {path: 'transformations/add', component: TransformationAddComponent},
        {path: 'chats', component: ChatComponent},
      ]
    },
    {
      path:'', component: FullpageadminComponent, children: [
        {path: 'admin', component: AdminComponent},
        {path: 'admin/trainings', component: AdminTrainingComponent, canActivate: [AdminAuthorizeGuard]},
        {path: 'admin/trainings/update/:id', component: AdminTrainingUpdateComponent, canActivate: [AdminAuthorizeGuard]},
        {path: 'admin/trainings/add', component: AdminTrainingAddComponent, canActivate: [AdminAuthorizeGuard]},
        {path: 'admin/categories', component: AdminCategoryComponent, canActivate: [AdminAuthorizeGuard]},
        {path: 'admin/categories/add', component: AdminCategoryAddComponent, canActivate: [AdminAuthorizeGuard]},
        {path: 'admin/categories/update/:id', component: AdminCategoryUpdateComponent, canActivate: [AdminAuthorizeGuard]},
        {path: 'admin/reviews', component: AdminReviewComponent, canActivate: [AdminAuthorizeGuard]},
      ]
    },
    {
      path:'', component: FullpageadminemptyComponent, children: [
        {path: 'admin/login', component: AdminLoginComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
