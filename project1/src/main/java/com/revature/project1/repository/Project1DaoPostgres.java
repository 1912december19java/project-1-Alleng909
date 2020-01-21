package com.revature.project1.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.revature.project1.models.Reimbursement;

public class Project1DaoPostgres implements Project1Dao {
  private static Connection conn;

  public Project1DaoPostgres(Connection c) {
    conn = c;
  }

  @Override
  public List<String> getAllEmployees() {
    List<String> employees = new ArrayList<String>();
    try {
      PreparedStatement ps = conn.prepareStatement("SELECT full_name FROM employees");
      ps.execute(); // Run code.
      ResultSet rs = ps.getResultSet(); // Get results.
      while(rs.next()) {
        employees.add(rs.getString(1));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return employees;
  }

  @Override
  public List<String> getAllManagers() {
    List<String> managers = new ArrayList<String>();
    try {
      PreparedStatement ps = conn.prepareStatement("SELECT full_name FROM managers");
      ps.execute(); // Run code.
      ResultSet rs = ps.getResultSet(); // Get results.
      while(rs.next()) {
        managers.add(rs.getString(1));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return managers;
  }

  @Override
  public String getEmployeeEmail(String fullName) {
    String email = "";
    try {
      PreparedStatement ps = conn.prepareStatement("SELECT email FROM employees WHERE full_name = ?");
      ps.setString(1, fullName);
      ps.execute(); // Run code.
      ResultSet rs = ps.getResultSet(); // Get results.
      if(rs.next()) {
        email = rs.getString(1);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return email;
  }

  @Override
  public void setEmployeeEmail(String fullName, String email) {
    try {
      PreparedStatement ps = conn.prepareStatement("UPDATE employees SET email = ? WHERE full_name = ?");
      ps.setString(1, email);
      ps.setString(2, fullName);
      ps.execute(); // Run code.
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }

  @Override
  public void addReimbursement(Reimbursement r) {
    try {
      PreparedStatement ps = conn.prepareStatement("INSERT INTO reimbursements (amount, reason, employee, imageurl) VALUES (?,?,?,?)");
      ps.setDouble(1, r.getAmount());
      ps.setString(2, r.getReason());
      ps.setString(3, r.getEmployeeName());
      ps.setString(4, r.getImageUrl());
      ps.execute(); // Run code.
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
  
  @Override
  public void updateReimbursement(Reimbursement r) {
    try {
      boolean approved = false;
      if (r.getId() == 1) {
        approved = true;
      }
      PreparedStatement ps = conn.prepareStatement("UPDATE reimbursements SET manager = ?, approved = ? WHERE id = ?");
      ps.setString(1, r.getManagerName());
      ps.setBoolean(2, approved);
      ps.setInt(3, r.getId());
      ps.execute(); // Run code.
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
  
  @Override
  public List<Reimbursement> getAllReimbursements() {
    List<Reimbursement> list = new ArrayList<Reimbursement>();
    try {
      PreparedStatement ps = conn.prepareStatement("SELECT * FROM reimbursements");
      ps.execute(); // Run code.
      ResultSet rs = ps.getResultSet(); // Get results.
      while(rs.next()) { 
        list.add(new Reimbursement(rs));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return list;
  }

  @Override
  public List<Reimbursement> getReimbursements(String fullName) {
    List<Reimbursement> list = new ArrayList<Reimbursement>();
    try {
      PreparedStatement ps = conn.prepareStatement("SELECT * FROM reimbursements WHERE employee = ?");
      ps.setString(1, fullName);
      ps.execute(); // Run code.
      ResultSet rs = ps.getResultSet(); // Get results.
      while(rs.next()) { 
        list.add(new Reimbursement(rs));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return list;

  }
  
  @Override
  public List<Reimbursement> getReimbursements(int metadata) {
    List<Reimbursement> list = new ArrayList<Reimbursement>();
    try {
      PreparedStatement ps = conn.prepareStatement("SELECT * FROM reimbursements WHERE approved = ?");
      ps.setInt(1, metadata);
      ps.execute(); // Run code.
      ResultSet rs = ps.getResultSet(); // Get results.
      while(rs.next()) { 
        list.add(new Reimbursement(rs));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return list;
  }
  
  @Override
  public List<Reimbursement> getReimbursements(String fullName, int metadata) {
    List<Reimbursement> list = new ArrayList<Reimbursement>();
    try {
      PreparedStatement ps = conn.prepareStatement("SELECT * FROM reimbursements WHERE employee = ? AND approved = ?");
      ps.setString(1, fullName);
      ps.setInt(2, metadata);
      ps.execute(); // Run code.
      ResultSet rs = ps.getResultSet(); // Get results.
      while(rs.next()) { 
        list.add(new Reimbursement(rs));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return list;
  }
  
  
}
