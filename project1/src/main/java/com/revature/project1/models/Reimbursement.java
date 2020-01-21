package com.revature.project1.models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Reimbursement {
  private int id;
  private String employeeName;
  private double amount;
  private String reason;
  private String imageUrl;
  private String managerName;
  private int metaData; //0 - Null, 1 - Approved, 2 - Denied.

  public Reimbursement() {}
  
  //IMAGE URL / BYTEA blob not implemented currently.
  public Reimbursement(ResultSet rs) throws SQLException {
    this(rs.getInt("id"), rs.getString("employee"), rs.getDouble("amount"), 
        rs.getString("reason"), null, rs.getString("manager"), rs.getInt("approved"));
  }

  public Reimbursement(int i, String eN, double a, String r, String iU, String mN, int m) {
    id = i;
    employeeName = eN;
    amount = a;
    reason = r;
    imageUrl = iU;
    managerName = mN;
    metaData = m;
  }

  
  
  @Override
  public String toString() {
    return "Reimbursement [id=" + id + ", employeeName=" + employeeName + ", amount=" + amount + ", reason="
        + reason + ", imageURL=" + imageUrl + ", managerName=" + managerName + ", metaData="
        + metaData + "]";
  }
  
  //List of getter/setters for all the fields.
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getEmployeeName() {
    return employeeName;
  }

  public void setEmployeeName(String employeeName) {
    this.employeeName = employeeName;
  }

  public double getAmount() {
    return amount;
  }

  public void setAmount(double amount) {
    this.amount = amount;
  }

  public String getReason() {
    return reason;
  }

  public void setReason(String reason) {
    this.reason = reason;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getManagerName() {
    return managerName;
  }

  public void setManagerName(String managerName) {
    this.managerName = managerName;
  }
    
  public int getMetaData() {
    return metaData;
  }

  public void setMetadata(int metaData) {
    this.metaData = metaData;
  }
}
