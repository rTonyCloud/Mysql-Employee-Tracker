const express = require('express');
const db = require('./db/connection');
const {prompt} = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require("console.table");
const Query = require("./libs/inputDB");
const { connect } = require('./db/connection');
const inquirer = require('inquirer');


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
          name: 'Remove Departments',
          value: 'REMOVE_DDEPARTMENT'
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
          db.query("SELECT * FROM department JOIN roles ON department_id = department.id", function(err, employee_dept){
            if (err) throw err
            console.table(employee_dept)
            startApp()
          })
          break;

        case 'VIEW_EMPLOYEES_BY_MGR':
          db.query("SELECT worker.first_name, worker.last_name, manager.first_name, manager.last_name FROM employee AS worker JOIN employee AS manager ON worker.manager_id = manager.id", function(err, employee_ByMgr){
            if (err) throw err
            console.table(employee_ByMgr)
            startApp()
          })
          break;

        case 'VIEW_NEW_EMPLOYEES':
          db.query("INSERT ", function(err, employee_NewEmploy){
            if (err) throw err
            console.table(employee_NewEmploy)
            startApp()
          })
          break;

        case 'REMOVE_EMPLOYEES':
          db(addpromise).query("DELETE FROM employee WHERE employee_id ? ", function(err, REMOVE_EMPLOYEES){
            if (err) throw err
            console.table(REMOVE_EMPLOYEES)
            startApp()
          })
          break;

        case 'UPDATE_EMPLOYEES_ROLES':
          db.query("UPDATE ", function(err, UPDATE_EMPLOYEES_ROLES){
            if (err) throw err
            console.table(UPDATE_EMPLOYEES_ROLES)
            startApp()
          })
          break;

        case 'UPDATE_EMPLOYEES_MGR':
          db.query("UPDATE ", function(err, UPDATE_EMPLOYEES_MGR){
            if (err) throw err
            console.table(UPDATE_EMPLOYEES_MGR)
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
          
          db.promise().query("SELECT * FROM employee_db.roles")
          .then( ([rows,fields]) => {
            // db.promise.query("SELECT * FROM employee_db.roles ", function(err, employee_RemoveRoles){
            //   if (err) throw err
            //   console.table(employee_RemoveRoles)
            //   startApp()
            // })
            console.log(rows);
            prompt({
              type: 'list',
              name: 'choice',
              message: "What would you like to do?",
              choices: title.map(({row} => row),
            })

             
          })
          .catch(console.log)
        
          break;
          case 'REMOVE_DEPARTMENTS':
            db.promise.query("DELETE", function(err, employee_RemoveDepartments){
              if (err) throw err
              console.table(employee_RemoveDepartments)
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

// first query all employees * select employee, CREATE A LIST for the user to select from that would be inside the return of the promise


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