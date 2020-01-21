import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login.service';
import { Reimbursement } from '../../../reimbursement';
import { ConnectService } from '../../../connect.service';

@Component({
  selector: 'app-employee-pending',
  templateUrl: './employee-pending.component.html',
  styles: []
})
export class EmployeePendingComponent implements OnInit {
  reimbursements: Reimbursement[];
  constructor(private log: LoginService, private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getPending(this.log.employee.split(' ').join('_')).subscribe((data)=>{
      this.reimbursements = data;
    });
  }
}
