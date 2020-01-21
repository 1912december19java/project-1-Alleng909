import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeInfoComponent } from './employee-page/employee-navbar/employee-info/employee-info.component';
import { EmployeeLogoutComponent } from './employee-page/employee-navbar/employee-logout/employee-logout.component';
import { EmployeePendingComponent } from './employee-page/employee-navbar/employee-pending/employee-pending.component';
import { EmployeeResolvedComponent } from './employee-page/employee-navbar/employee-resolved/employee-resolved.component';
import { EmployeeSubmitComponent } from './employee-page/employee-navbar/employee-submit/employee-submit.component';
import { ManagerEmployeeListComponent } from './manager-page/manager-navbar/manager-employee-list/manager-employee-list.component';
import { ManagerEmployeeSpecificComponent } from './manager-page/manager-navbar/manager-employee-specific/manager-employee-specific.component';
import { ManagerLogoutComponent } from './manager-page/manager-navbar/manager-logout/manager-logout.component';
import { ManagerPendingComponent } from './manager-page/manager-navbar/manager-pending/manager-pending.component';
import { ManagerResolvedComponent } from './manager-page/manager-navbar/manager-resolved/manager-resolved.component';


const routes: Routes = [
  {
    path: "employee-info",
    component: EmployeeInfoComponent,
  },
  {
    path: "employee-logout",
    component: EmployeeLogoutComponent,
  },
  {
    path: "employee-pending",
    component: EmployeePendingComponent,
  },
  {
    path: "employee-resolved",
    component: EmployeeResolvedComponent,
  },
  {
    path: "employee-submit",
    component: EmployeeSubmitComponent,
  },
  {
    path: "manager-employee-list",
    component: ManagerEmployeeListComponent,
  },
  {
    path: "manager-employee-specific",
    component: ManagerEmployeeSpecificComponent,
  },
  {
    path: "manager-logout",
    component: ManagerLogoutComponent,
  },
  {
    path: "manager-pending",
    component: ManagerPendingComponent,
  },
  {
    path: "manager-resolved",
    component: ManagerResolvedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
