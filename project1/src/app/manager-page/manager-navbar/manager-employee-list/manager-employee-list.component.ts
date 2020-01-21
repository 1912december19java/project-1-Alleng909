import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';

@Component({
  selector: 'app-manager-employee-list',
  templateUrl: './manager-employee-list.component.html',
  styles: []
})
export class ManagerEmployeeListComponent implements OnInit {
  employees: string[];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getAllEmployees().subscribe((data)=>{
      this.employees = data;
    });
  }

}
