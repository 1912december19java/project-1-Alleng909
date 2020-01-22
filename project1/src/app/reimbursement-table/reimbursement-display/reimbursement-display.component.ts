import { Component, OnInit, Input } from '@angular/core';
import { Reimbursement } from '../../reimbursement';

@Component({
  selector: 'app-reimbursement-display',
  templateUrl: './reimbursement-display.component.html',
  styles: []
})
export class ReimbursementDisplayComponent implements OnInit {
  @Input()
  reimbursement: Reimbursement;
  approval: string;

  constructor() { }

  ngOnInit() {
    this.approval = null;
    if (this.reimbursement.metaData === 1) {
      this.approval = "Approved";
    } else if (this.reimbursement.metaData === 2) {
      this.approval = "Denied";
    }
  }

}
