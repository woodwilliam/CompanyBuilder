const inquirer = require('inquirer');
const qs = require('./prompts');
const Db = require('../db/index');
const bread = require('console.table');
function plusDepartment(fileName, data){
    inquirer
        .prompt(qs.departmentQs)
        .then((response) => {
            Db.addDepartment(response.dName);
        }).then(() => babaYaga());
};
function plusEmployee(fileName, data){
    inquirer
    .prompt(qs.employeeQs)
    .then((response) => {
        Db.addEmployee(response.eName, response.eRole, response.eMgr);})
        .then(() => babaYaga());
};
function plusRole(fileName, data){
    inquirer
    .prompt(qs.roleQs)
    .then((response) => {
        Db.addRole(response.rName, response.rSalary, response.rDep);})
        .then(() => babaYaga());
};
function uppyMcDateDate(fileName, data){
    inquirer.prompt(qs.updateQs).then((response) => {
        Db.updateEmployee(response.findEmployee, response.nuRole);})
        .then(() => babaYaga());
}
function peepRole(fileName, data) {
    
}
function peepDept(fileName, data) {

}
function peepEmployee(fileName, data) {
    
}
function optionsResponse(response) {
    console.log(response.options);
    let grumhuckle = response.options
    
    if (grumhuckle == 'VIEW ALL DEPARTMENTS') {
        Db.viewAllDepartments().then(([data]) => {
            console.table(data)
        }).then(() => babaYaga());
    } else if (grumhuckle == 'VIEW ALL ROLES') {
        Db.viewAllRoles().then(([data]) => {
            console.table(data)
        }).then(() => babaYaga());
    } else if (grumhuckle == 'VIEW ALL EMPLOYEES') {
        Db.viewAllEmployees().then(([data]) => {
            console.table(data)
        }).then(() => babaYaga());;
    } else if (grumhuckle == 'ADD A DEPARTMENT') {
        plusDepartment();
    } else if (grumhuckle == 'ADD A ROLE') {
        plusRole();
    } else if (grumhuckle == 'ADD AN EMPLOYEE') {
        plusEmployee();
    } else if (grumhuckle == 'UPDATE EMPLOYEE ROLE') {
        uppyMcDateDate();
    } else {console.log('WHERE IS ALL OF THE HASHBROWN POTATOES?!?!?!')
    }
}
function babaYaga(fileName, data) {
    inquirer
    .prompt(qs.firstQs)
    .then((response) =>
    optionsResponse(response));
}
function init() {
babaYaga();
}

module.exports = {plusDepartment, plusEmployee, plusRole, uppyMcDateDate, optionsResponse, babaYaga, init};