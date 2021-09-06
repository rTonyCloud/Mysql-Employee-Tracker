const express = require('express');
const db = require('./db/connection');
const {prompt} = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require("console.table");
const Query = require("./libs/inputDB")

const PORT = process.env.PORT || 3003;
const app = express();

// Express middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

// Use apiRoute
// app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


const logoText = logo({
  name: "Employee Tracker"
}).render();
console.log(logoText)


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
          q.findA
          break;
        case 'VIEW_EMPLOYEES_DEPT':
          console.log('view employees department');
          break;
        case 'VIEW_EMPLOYEES_BY_MGR':
          console.log('view employees by manager selected');
          break;
        case 'VIEW_NEW_EMPLOYEES':
          console.log('view new employees');
          break;
        case 'REMOVE_EMPLOYEES':
          console.log('remove employees selected');
          break;
        case 'UPDATE_EMPLOYEES_ROLES':
          console.log('update employees roles');
          break;
        case 'UPDATE_EMPLOYEES_MGR':
          console.log('update employees manager');
          break;
        case 'VIEW_ALL_ROLES':
          console.log('view all roles selected!');
          break;
        case 'REMOVE_EMPLOYEES_ROLES':
          console.log('remove employees selected');
        default:
          console.log('default');
          break;
        case 'Exit_application':
          connection.end();
      }
    }
)};

startApp();

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 


// CREATE TABLE employees (id int AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, role_id INTEGER NOT NULL, FORIEGN KEY (manager_id) REFERENCE employee(id)

// GIVEN a command-line application that accepts user input - completed

// create this 
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
//  completed tasks

// completed tasks //


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