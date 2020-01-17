package com.revature.project1.repository;

import java.util.List;
import com.revature.project1.models.Reimbursement;

public interface Project1Dao {
  //Return list of all Employees.
  List<String> getAllEmployees();
  
  //Return list of all Managers.
  List<String> getAllManagers();
  
  //Gets info (email) of employee given name.
  String getEmployeeEmail(String fullName);
  
  //Changes info (email) of employee given name.
  void setEmployeeEmail(String fullName, String email);
  
  //Adds Reimbursement to DB.
  void addReimbursement(Reimbursement r);
  
  //Approves(true) or rejects(false) a reimbursement with manager name.
  public void updateReimbursement(Reimbursement r);
  
  //Gets list of all Reimbursements.
  List<Reimbursement> getAllReimbursements();
  
  //Gets list of reimbursements from a specific employee.
  List<Reimbursement> getReimbursements(String fullName);
  
  //Gets list of reimbursements that are either true (Confirmed) or false (Pending).
  List<Reimbursement> getReimbursements(String fullName, int metadata);
}
