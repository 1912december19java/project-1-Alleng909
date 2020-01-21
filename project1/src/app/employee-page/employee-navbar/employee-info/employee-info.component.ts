import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../../connect.service';
import { LoginService } from '../../../login.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styles: []
})
export class EmployeeInfoComponent implements OnInit {
  email: string;
  constructor(private log: LoginService, private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getEmail(this.log.employee.split(' ').join('_')).subscribe((data)=>{
      this.email = data;
    });
  }

  change() : void {
    this.conn.changeEmail(this.log.employee.split(' ').join('_'), this.email);
  }

}