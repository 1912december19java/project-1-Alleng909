import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styles: [`
  .primary-color {
    color:#faf;
    background-color:#afa;
  }
  `]
})
export class EmployeeNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
