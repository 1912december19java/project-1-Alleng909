import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reimbursement } from './reimbursement'

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/project1/employees');
  }

  getAllManagers() : Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/project1/managers');
  }

  getPending(name: string) : Observable<Reimbursement[]> {
    if(name === undefined) {
      name = "";
    }
    return this.http.get<Reimbursement[]>(`http://localhost:8080/project1/reimbursements/0/${name}`);
  }

  getResolved(name: string) : Observable<Reimbursement[]> {
    if(name === undefined) {
      name = "";
    }
    return this.http.get<Reimbursement[]>(`http://localhost:8080/project1/reimbursements/1/${name}`);
  }

  getEmail(name: string) : Observable<string> {
    return this.http.get<string>(`http://localhost:8080/project1/employees/${name}`);
  }

  changeEmail(name: string, email: string): void {
    this.http.post(`http://localhost:8080/project1/employees/${name}/${email}`, []).subscribe((data)=>{console.log(data)});
  }

  addReimbursement(r: Reimbursement): void {
    this.http.post('http://localhost:8080/project1/addreimbursement', r).subscribe((data)=>{console.log(data)});
  }

  updateReimbursement(r: Reimbursement): void {
    this.http.post(`http://localhost:8080/project1/updatereimbursement`, r).subscribe((data)=>{console.log(data)});
  }
}
