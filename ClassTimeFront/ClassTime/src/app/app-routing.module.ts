import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './components/login/login.guard';
import { AdminGuard } from './components/admin/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: './components/login/login.module#LoginModule', canActivate: [LoginGuard]},
  {path: 'admin', loadChildren: './components/admin/admin-dashboard/admin-dashboard.module#AdminDashboardModule', canActivate: [AuthGuard, AdminGuard]},
  {path: 'admin/schools', loadChildren: './components/admin/school-list/school-list.module#SchoolListModule', canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
