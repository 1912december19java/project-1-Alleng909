import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement';
import { ConnectService } from 'src/app/connect.service';

@Component({
  selector: 'app-manager-pending',
  templateUrl: './manager-pending.component.html',
  styles: []
})
export class ManagerPendingComponent implements OnInit {
  reimbursements: Reimbursement[];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getPending("").subscribe((data)=>{
      this.reimbursements = data;
    });
  }

}
