package com.revature.project1.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.project1.models.Reimbursement;
import com.revature.project1.repository.Project1Dao;
import com.revature.project1.repository.Project1DaoPostgres;


@WebServlet(name = "FrontController", urlPatterns = {"/*"})
public class FrontController extends HttpServlet {
  private Project1Dao dao;
  private ObjectMapper om;

  @Override
  public void init() throws ServletException {
    Connection conn = null;
    try {
      Class.forName("org.postgresql.Driver");
      conn = DriverManager.getConnection(System.getenv("comstring"), System.getenv("username"),
          System.getenv("password"));
    } catch (SQLException e) {
      e.printStackTrace();
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    }
    this.dao = new Project1DaoPostgres(conn);
    this.om = new ObjectMapper();
    super.init();
  }

  @Override
  public void destroy() {
    dao = null;
    om = null;
    super.destroy();
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
    System.out.println(req.getRequestURI());
    String[] tokens = req.getRequestURI().split("/");
    // resp.getWriter().write(om.writeValueAsString(tokens));
    if (tokens.length > 2) {
      switch (tokens[2]) {
        case "employees":
          if (tokens.length > 3) {
            String email = dao.getEmployeeEmail(tokens[3].replaceAll("_", " "));
            resp.getWriter().write(om.writeValueAsString(email));
          } else {
            List<String> employees = dao.getAllEmployees();
            resp.getWriter().write(om.writeValueAsString(employees));
          }
          break;
        case "managers":
          List<String> managers = dao.getAllManagers();
          resp.getWriter().write(om.writeValueAsString(managers));
          break;
        case "reimbursements": // Default gives all reimbursements
          if (tokens.length > 3) {
            if (tokens[3].equals("0")) {// Pending reimbursements
              if (tokens.length > 4) {// Specific employee
                tokens[4] = tokens[4].replaceAll("_", " ");//Cleaning String
                List<Reimbursement> re = dao.getReimbursements(tokens[4], 0);
                resp.getWriter().write(om.writeValueAsString(re));
              } else {// For all employees
                List<Reimbursement> re = dao.getReimbursements(0);
                resp.getWriter().write(om.writeValueAsString(re));
              }
            } else {// Resolved reimbursements
              if (tokens.length > 4) {// Specific employee
                tokens[4] = tokens[4].replaceAll("_", " ");
                List<Reimbursement> reApproved = dao.getReimbursements(tokens[4], 1);
                List<Reimbursement> reDenied = dao.getReimbursements(tokens[4], 2);
                reApproved.addAll(reDenied);
                resp.getWriter().write(om.writeValueAsString(reApproved));
              } else {// For all employees
                List<Reimbursement> reApproved = dao.getReimbursements(1);
                List<Reimbursement> reDenied = dao.getReimbursements(2);
                reApproved.addAll(reDenied);
                resp.getWriter().write(om.writeValueAsString(reApproved));
              }
            }
          } else {
            List<Reimbursement> re = dao.getAllReimbursements();
            resp.getWriter().write(om.writeValueAsString(re));
          }
          break;
        default:
          resp.getWriter().write("404 Error, page does not exist.");
      }
    } else {
      resp.getWriter().write("Hello");
    }
    /*
     * List<Reimbursement> list = null; String employee = req.getParameter("employee"); if (employee
     * == null) { list = dao.getAllReimbursements(); System.out.println("employee was null"); } else
     * { System.out.println(employee); resp.getWriter().write(employee);
     * 
     * } resp.getWriter().write(om.writeValueAsString(list));
     */
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
    String[] tokens = req.getRequestURI().split("/");
    if(tokens.length > 2) { //Employee update
      if (tokens[2].equals("employees")) {
        if(tokens.length > 4) {
          dao.setEmployeeEmail(tokens[3].replaceAll("_", " "), tokens[4]);
        }
      } else if (tokens[2].equals("addreimbursement")) { //Reimbursement update
        Reimbursement r = om.readValue(req.getReader(), Reimbursement.class);
        dao.addReimbursement(r);
      } else if (tokens[2].equals("updatereimbursement")) {
        Reimbursement r = om.readValue(req.getReader(), Reimbursement.class);
        dao.updateReimbursement(r);
      }
    }
  }
}
