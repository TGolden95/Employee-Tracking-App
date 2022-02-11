const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const { inherits } = require("util");

init();

function init() {
  const text = logo({ name: "Employee Manager" }).render();
}

function mainPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all of the Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add an Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update the Role of an Employee",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "View All of the Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add a new Role",
          value: "ADD_ROLE",
        },
        {
          name: "View all of the Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add a new Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;

      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      default:
        quit();
    }
  });
}
