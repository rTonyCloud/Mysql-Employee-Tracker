const express = require('express');
const db = require('./db/connection');
const {prompt} = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require("console.table");
const Query = require("./libs/inputDB");
const { connect } = require('./db/connection');


const logoText = logo({
  name: "Employee Tracker"
}).render();
console.log(logoText)

db.connect(err => {
  if (err) throw err;
  startApp();
})

function startApp() {
  prompt([{
      type: 'list',
      name: 'choice',
      message: "What would you like to do?",
      choices: [{
          name: 'View All Employees',
          value: 'VIEW_EMPLOYEES'
        },
        {
          name: 'View All Employees by Department',
          value: 'VIEW_EMPLOYEES_DEPT'
        },
        {
          name: 'View All Employees by Manager',
          value: 'VIEW_EMPLOYEES_BY_MGR'
        },
        {
          name: 'All Roles',
          value: 'VIEW_ALL_ROLES'
        },
        {
          name: 'Add New Employee',
          value: 'VIEW_NEW_EMPLOYEES'
        },
        {
          name: 'Update Employee Role',
          value: 'UPDATE_EMPLOYEES_ROLES'
        },
        {
          name: 'Update Employee Manager',
          value: 'UPDATE_EMPLOYEES_MGR'
        },
        {
          name: 'Remove Employee',
          value: 'REMOVE_EMPLOYEES'
        },
        {
          name: 'Remove Roles',
          value: 'REMOVE_EMPLOYEES_ROLES'
        },
        {
          name: 'Exit Application',
          value: 'EXIT_APPLICATION'
        }
      ]
    }]).then(res => {
      let choice = res.choice
      switch (choice) {
        case 'VIEW_EMPLOYEES':
          db.query("select * FROM employee", function(err, employee_row){
            if (err) throw err
            console.table(employee_row)
            startApp()
          })
          break;

        case 'VIEW_EMPLOYEES_DEPT':
          db.query("SELECT * employee(empl", function(err, employee_dept){
            if (err) throw err
            console.table(employee_dept)
            startApp()
          })
          break;

        case 'VIEW_EMPLOYEES_BY_MGR':
          db.query("", function(err, employee_ByMgr){
            if (err) throw err
            console.table(employee_ByMgr)
            startApp()
          })
          break;

        case 'VIEW_NEW_EMPLOYEES':
          db.query("", function(err, employee_NewEmploy){
            if (err) throw err
            console.table(employee_NewEmploy)
            startApp()
          })
          break;

        case 'REMOVE_EMPLOYEES':
          db.query("", function(err, employee_NewEmploy){
            if (err) throw err
            console.table(employee_NewEmploy)
            startApp()
          })
          break;

        case 'UPDATE_EMPLOYEES_ROLES':
          db.query("", function(err, employee_NewEmploy){
            if (err) throw err
            console.table(employee_NewEmploy)
            startApp()
          })
          break;

        case 'UPDATE_EMPLOYEES_MGR':
          db.query("", function(err, employee_NewEmploy){
            if (err) throw err
            console.table(employee_NewEmploy)
            startApp()
          })
          break;
        case 'VIEW_ALL_ROLES':
          db.query("select * FROM employee_db.roles", function(err, employee_roles){
            if (err) throw err
            console.table(employee_roles)
            startApp()
          })
          break;
        case 'REMOVE_EMPLOYEES_ROLES':
          db.query("", function(err, employee_RemoveRoles){
            if (err) throw err
            console.table(employee_RemoveRoles)
            startApp()
          })
        default:
          console.log('default');
          break;
        case 'EXIT_APPLICATION':
          db.end();
      }
    }
)};

// Update an employee 
  const sql = `UPDATE candidates SET party_id = ? 
               WHERE id = ?`;
  const params = [req.body.party_id, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) throw err;
        // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: 'Candidate not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// Update a candidate's party
  db.query(sql, params, (err, result) => {
    if (err) throw err; {;
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: 'Candidate not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 