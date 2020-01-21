import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeNavbarComponent } from './employee-page/employee-navbar/employee-navbar.component';
import { ManagerNavbarComponent } from './manager-page/manager-navbar/manager-navbar.component';
import { EmployeeSubmitComponent } from './employee-page/employee-navbar/employee-submit/employee-submit.component';
import { EmployeePendingComponent } from './employee-page/employee-navbar/employee-pending/employee-pending.component';
import { EmployeeResolvedComponent } from './employee-page/employee-navbar/employee-resolved/employee-resolved.component';
import { EmployeeInfoComponent } from './employee-page/employee-navbar/employee-info/employee-info.component';
import { EmployeeLogoutComponent } from './employee-page/employee-navbar/employee-logout/employee-logout.component';
import { ManagerPendingComponent } from './manager-page/manager-navbar/manager-pending/manager-pending.component';
import { ManagerResolvedComponent } from './manager-page/manager-navbar/manager-resolved/manager-resolved.component';
import { ManagerEmployeeSpecificComponent } from './manager-page/manager-navbar/manager-employee-specific/manager-employee-specific.component';
import { ManagerEmployeeListComponent } from './manager-page/manager-navbar/manager-employee-list/manager-employee-list.component';
import { ManagerLogoutComponent } from './manager-page/manager-navbar/manager-logout/manager-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePageComponent,
    WelcomePageComponent,
    ManagerPageComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeNavbarComponent,
    ManagerNavbarComponent,
    EmployeeSubmitComponent,
    EmployeePendingComponent,
    EmployeeResolvedComponent,
    EmployeeInfoComponent,
    EmployeeLogoutComponent,
    ManagerPendingComponent,
    ManagerResolvedComponent,
    ManagerEmployeeSpecificComponent,
    ManagerEmployeeListComponent,
    ManagerLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
