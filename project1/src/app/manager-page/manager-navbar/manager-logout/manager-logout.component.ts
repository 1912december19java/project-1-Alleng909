import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-manager-logout',
  templateUrl: './manager-logout.component.html',
  styles: []
})
export class ManagerLogoutComponent implements OnInit {

  constructor(private log: LoginService) { }

  ngOnInit() {
  }

  logout(): void {
    this.log.manager = null;
  }

}
