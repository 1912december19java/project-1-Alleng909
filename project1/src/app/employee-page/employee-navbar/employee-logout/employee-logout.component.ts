import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-employee-logout',
  templateUrl: './employee-logout.component.html',
  styles: []
})
export class EmployeeLogoutComponent implements OnInit {

  constructor(private log: LoginService) { }

  ngOnInit() {
  }

  logout(): void {
    this.log.employee = null;
  }

}
