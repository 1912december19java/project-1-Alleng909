import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ConnectService } from '../connect.service';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styles: []
})
export class WelcomePageComponent implements OnInit {
  employees: string[];
  managers: string[];

  constructor(private log: LoginService, private conn: ConnectService) { }
  employeeOption: string;
  managerOption: string;

  ngOnInit() {
    this.conn.getAllEmployees().subscribe((data)=>{
      this.employees = data;
    });
    this.conn.getAllManagers().subscribe((data)=>{
      this.managers = data;
    }); 
  }

  employeeSubmit() {
    if(this.employeeOption !== undefined) {
      this.log.employeeLogin(this.employeeOption);
    }
  }

  managerSubmit(name: string) {
    if(this.managerOption !== undefined) {
      this.log.managerLogin(this.managerOption);
    }
  }

}
