package com.revature.project1.controllers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;
import com.revature.project1.models.Reimbursement;
import com.revature.project1.repository.Project1Dao;
import com.revature.project1.repository.Project1DaoPostgres;

public class Main {
  public static void main(String[] args) {
    Connection conn = null;
    try {
      conn = DriverManager.getConnection(System.getenv("comstring"), System.getenv("username"), System.getenv("password"));
    } catch(SQLException e) {
      e.printStackTrace();
    }
    Project1Dao dao = new Project1DaoPostgres(conn);
    List<Reimbursement> list = dao.getReimbursements("Dill Pickle", 1);
    System.out.println(dao.getAllEmployees());
    System.out.println(list);
  }
}
