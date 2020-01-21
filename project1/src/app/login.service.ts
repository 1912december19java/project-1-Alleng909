import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  employee: string;
  manager: string;

  constructor() { 
    this.employee = null;
    this.manager = null;
  }

  employeeLogin(name: string) {
    this.employee = name;
  }

  managerLogin(name: string) {
    this.manager = name;
  }
}
