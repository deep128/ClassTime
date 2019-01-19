import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './components/login/login.guard';
import { AdminGuard } from './components/productOwner/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: './components/login/login.module#LoginModule', canActivate: [LoginGuard]},
  {path: 'productOwner', loadChildren: './components/productOwner/product-owner-dashboard/admin-dashboard.module#AdminDashboardModule', canActivate: [AuthGuard, AdminGuard]},
  {path: 'productOwner/schools', loadChildren: './components/productOwner/school-list/school-list.module#SchoolListModule', canActivate: [AuthGuard, AdminGuard]},
  {path: 'productOwner/schools/add', loadChildren: './components/productOwner/add-school/add-school.module#AddSchoolModule', canActivate: [AuthGuard, AdminGuard]},
  {path: 'productOwner/schools/:schoolid', loadChildren: './components/productOwner/school-detail/school-detail.module#SchoolDetailModule', canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
