// links
const express = require('express');
const db = require('./db/connection');
const {prompt} = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require("console.table");
const {connect} = require('./db/connection');
const Inquirer = require('inquirer');


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
        name: 'View All Departments',
        value: 'VIEW_DEPARTMENTS'
      },
      {
        name: 'View All Employees by Department',
        value: 'VIEW_EMPLOYEES_BY_DEPT'
      },
      {
        name: 'View All Employees by Manager',
        value: 'VIEW_EMPLOYEES_BY_MGR'
      },
      {
        name: 'View All Roles',
        value: 'VIEW_ALL_ROLES'
      },
      {
        name: 'Add New Role',
        value: 'ADD_NEW_ROLE'
      },
      {
        name: 'Add New Employee',
        value: 'ADD_NEW_EMPLOYEE'
      },
      {
        name: 'Add New Departments',
        value: 'ADD_NEW_DEPARTMENTS'
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
        value: 'REMOVE_DEPARTMENT'
      },
      {
        name: 'View Total Budget',
        value: 'VIEW_TOTAL_BUDGET'
      },
      {
        name: 'Exit Application',
        value: 'EXIT_APPLICATION'
      },
    ]
  }]).then(res => {
    let choice = res.choice
    switch (choice) {
      // compeleted
      case 'VIEW_EMPLOYEES':
        db.query("select * FROM employee", function (err, employee_row) {
          if (err) throw err
          console.table(employee_row)
          startApp()
        })
        break;

        // completed
      case 'VIEW_DEPARTMENTS':
        db.query("select * from department", function (err, view_departments) {
          if (err) throw err
          console.table(view_departments)
          startApp()
        })
        break;

          // works however its glitching alittle
      case 'VIEW_EMPLOYEES_BY_DEPT':
        db.query("select * from department join employee roles;", function (err, employee_dept) {
          if (err) throw err
          console.table(employee_dept)
          startApp()
        })
        break;

        // completed AND works on mysql workbench due to glitching on terminal
      case 'VIEW_EMPLOYEES_BY_MGR':
        db.query("SELECT worker.first_name, worker.last_name, manager.first_name, manager.last_name FROM employee AS worker JOIN employee AS manager ON worker.manager_id = manager.id", function (err, employee_ByMgr) {
          if (err) throw err
          console.table(employee_ByMgr)
          startApp()
        })
        break;


        // completed
      case 'VIEW_ALL_ROLES':
        db.query("select * FROM employee_db.roles", function (err, employee_roles) {
          if (err) throw err
          console.table(employee_roles)
          startApp()
        })
        break;


          // needs updating
      case 'UPDATE_EMPLOYEES_ROLES':
        prompt([{
          type: 'input',
          name: 'UPDATE_EMPLOYEES_ROLES',
          message: "Which employee would you like to update?",
        }]).then(answers => {
          db.query('UPDATE employee SET (role_id) = ? WHERE id = ?;', [answers.UPDATE_EMPLOYEES_ROLES],
            function (err, answers) {
              if (err) throw err
              startApp()
            });
        });
        break;

          // needs updating
        case 'UPDATE_EMPLOYEES_MGR':
          prompt([{
            type: 'input',
            name: 'REMOVE_EMPLOYEES',
            message: "Which employee would you like to update with manager id and employee id",
          }]).then(answers => {
            db.query('UPDATE employee SET (manager_id) = ? WHERE id = ?;', [answers.UPDATE_EMPLOYEES_MGR],
              function (err, answers) {
                if (err) throw err
                startApp()
              });
          });
          break;


          // completed
          case 'REMOVE_EMPLOYEES':
            prompt([{
              type: 'input',
              name: 'REMOVE_EMPLOYEES',
              message: "Which employee would you like to remove?",
            }]).then(answers => {
              db.query('DELETE FROM employee where id = ?;', [answers.REMOVE_EMPLOYEES],
                function (err, answers) {
                  if (err) throw err
                  startApp()
                });
            });
            break;


          // completed
      case 'REMOVE_EMPLOYEES_ROLES':
        prompt([{
          type: 'list',
          name: 'REMOVE_EMPLOYEES_ROLES',
          message: "Which Role would you like to remove?",
        }]).then(answers => {
          db.query('DELETE FROM roles where (title) = "​?";', [answers.REMOVE_EMPLOYEES_ROLES],
            function (err, answers) {
              if (err) throw err
              startApp()
            });
        });
        break;


        // completed
      case 'ADD_NEW_DEPARTMENTS':
        prompt([{
          type: 'input',
          name: 'department_name',
          message: "What is the new department's name?"
        }]).then(answers => {
          db.query('INSERT INTO department (name) VALUES (?)', [answers.department_name],
            function (err, answers) {
              if (err) throw err
              startApp()
            });
        });
        break;

          // needs fixing 
      case 'ADD_NEW_EMPLOYEE':
        prompt([{
            type: 'input',
            name: 'ADD_NEW_EMPLOYEE',
            message: "What is the new employee's first name?"
          },
          {
            type: 'input',
            name: 'ADD_NEW_EMPLOYEE',
            message: "What is the new employee's last name?"
          },
          {
            type: 'input',
            name: 'ADD_NEW_EMPLOYEE',
            message: "Enter the new employee's role for the company?"
          },
          {
            type: 'input',
            name: 'ADD_NEW_EMPLOYEE',
            message: "Who will manage this employee?"
          }
        ]).then(employee => {
          console.log(employee.first_name, employee.last_name)
          db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [answers.newEmployeeFirstName, answers.newEmployeeLastName, answers.newEmployeeRole, answers.newEmployeeManager],
            function (err, answers) {
              if (err) throw err
              startApp()
            });
        });
        break;

          // completed
      case 'REMOVE_DEPARTMENT':
        prompt([{
          type: 'input',
          name: 'department_name',
          message: "Which department do you want to remove?",
        }]).then(answers => {
          db.query('DELETE FROM department where (name) = (?)', [answers.department_name],
            function (err, answers) {
              if (err) throw err
              startApp()
            });
        });
        break;

          // completed by viewing total budget based on department_Id and title and department id so you can calculate it yourself...
      case 'VIEW_TOTAL_BUDGET':
        db.query("SELECT DISTINCT title, salary, department_id from roles, employee join department;;", function (err, VIEW_TOTAL_BUDGET) {
          if (err) throw err
          console.table(VIEW_TOTAL_BUDGET)
          startApp();
        })
        break;
      default:
        startApp();
        break;
      case 'EXIT_APPLICATION':
        db.end();
    }
  })
};

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