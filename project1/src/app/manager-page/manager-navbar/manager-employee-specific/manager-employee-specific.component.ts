import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../../connect.service';
import { Reimbursement } from '../../../reimbursement';

@Component({
  selector: 'app-manager-employee-specific',
  templateUrl: './manager-employee-specific.component.html',
  styles: []
})
export class ManagerEmployeeSpecificComponent implements OnInit {
  employees: string[];
  selectedEmployee: string;
  pendingReimbursements: Reimbursement[];
  resolvedReimbursements: Reimbursement[];

  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getAllEmployees().subscribe((data)=>{
      this.employees = data;
    });
  }

  employeeSelect() : void {
    this.conn.getPending(this.selectedEmployee.split(' ').join('_')).subscribe((data)=>{
      this.pendingReimbursements = data;
    });
    this.conn.getResolved(this.selectedEmployee.split(' ').join('_')).subscribe((data)=>{
      this.resolvedReimbursements = data;
    });
  }

}
