import { Component, OnInit } from '@angular/core';
import { Reimbursement } from '../../../reimbursement';
import { LoginService } from '../../../login.service';
import { ConnectService } from '../../../connect.service';

@Component({
  selector: 'app-employee-resolved',
  templateUrl: './employee-resolved.component.html',
  styles: []
})
export class EmployeeResolvedComponent implements OnInit {
  reimbursements: Reimbursement[];

  constructor(private log: LoginService, private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getResolved(this.log.employee.split(' ').join('_')).subscribe((data)=>{
      this.reimbursements = data;
    });
  }

}
