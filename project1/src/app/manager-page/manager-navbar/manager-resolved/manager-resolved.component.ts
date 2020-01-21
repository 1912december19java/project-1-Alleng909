import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';
import { Reimbursement } from 'src/app/reimbursement';

@Component({
  selector: 'app-manager-resolved',
  templateUrl: './manager-resolved.component.html',
  styles: []
})
export class ManagerResolvedComponent implements OnInit {
  reimbursements: Reimbursement[];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getResolved("").subscribe((data)=>{
      this.reimbursements = data;
    });
  }

}
