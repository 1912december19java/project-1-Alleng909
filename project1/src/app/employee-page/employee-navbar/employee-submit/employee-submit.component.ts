import { Component, OnInit } from '@angular/core';
import { Reimbursement } from '../../../reimbursement';
import { ConnectService } from '../../../connect.service';
import { LoginService } from '../../../login.service';

@Component({
  selector: 'app-employee-submit',
  templateUrl: './employee-submit.component.html',
  styles: []
})
export class EmployeeSubmitComponent implements OnInit {
  reimbursement: Reimbursement;
  constructor(private log: LoginService, private conn: ConnectService) { }

  ngOnInit() {
    this.reimbursement = {
      id: 0, 
      employeeName: this.log.employee, 
      amount: 0,
      reason: "Reason",
      imageUrl: "",
      managerName: "",
      metaData: 0
    };
  }

  submit() : void {
    this.conn.addReimbursement(this.reimbursement);
  }

}
