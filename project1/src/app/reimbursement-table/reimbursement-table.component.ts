import { Component, OnInit, Input } from '@angular/core';
import { Reimbursement } from '../reimbursement';


@Component({
  selector: 'app-reimbursement-table',
  templateUrl: './reimbursement-table.component.html',
  styles: []
})
export class ReimbursementTableComponent implements OnInit {

  @Input()
  reimbursements:Reimbursement[];

  constructor() { }

  ngOnInit() {
  }

}
