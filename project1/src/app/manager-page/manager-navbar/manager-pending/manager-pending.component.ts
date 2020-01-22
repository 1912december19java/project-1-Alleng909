import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement';
import { ConnectService } from 'src/app/connect.service';
import { LoginService } from '../../../login.service';

@Component({
  selector: 'app-manager-pending',
  templateUrl: './manager-pending.component.html',
  styles: []
})
export class ManagerPendingComponent implements OnInit {
  reimbursements: Reimbursement[];
  selectedId: number;
  reimbursement: Reimbursement;

  constructor(private log: LoginService, private conn: ConnectService) { }

  ngOnInit() : void{
    this.conn.getPending("").subscribe((data)=>{
      this.reimbursements = data;
    });
  }

  approve() : void {
    if(this.selectedId !== undefined) {
      for(let i = 0; i < this.reimbursements.length; i++) {
        if(this.selectedId == this.reimbursements[i].id) {
          this.reimbursement = this.reimbursements[i];
        }
      }
      console.log(this.reimbursement);
      this.reimbursement.managerName = this.log.manager;
      this.reimbursement.metaData = 1;
      this.conn.updateReimbursement(this.reimbursement);
    }
  }

  deny() : void {
    if(this.selectedId !== undefined) {
      for(let i = 0; i < this.reimbursements.length; i++) {
        if(this.selectedId == this.reimbursements[i].id) {
          this.reimbursement = this.reimbursements[i];
        }
      }
      this.reimbursement.managerName = this.log.manager;
      this.reimbursement.metaData = 2;
      this.conn.updateReimbursement(this.reimbursement);
    }
  }

}
