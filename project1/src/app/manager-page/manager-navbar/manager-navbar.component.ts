import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-navbar',
  templateUrl: './manager-navbar.component.html',
  styles: [`
  .primary-color {
    color:#faf;
    background-color:#afa;
  }
  `]
})
export class ManagerNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
