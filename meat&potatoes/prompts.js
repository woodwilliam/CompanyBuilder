const qs = {
    firstQs: [
        {
            type: 'list',
            message: 'Chu finna do?',
            choices: ['VIEW ALL DEPARTMENTS', 'VIEW ALL ROLES','VIEW ALL EMPLOYEES',
            'ADD A DEPARTMENT', 'ADD A ROLE', 'ADD AN EMPLOYEE', 'UPDATE EMPLOYEE ROLE'],
            name: 'options'
        }
    ],

    departmentQs: [
        {
            type: 'input',
            message: 'WHATS THE DEPARTMENT CALLED?',
            name: 'dName'
        }
    ],
    roleQs: [
        {
            type: 'input',
            message: 'WHAT IS THE NAME OF THIS ROLE?',
            name: 'rName'
        },
        {
            type: 'input',
            message: `WHAT IS ANNUAL SALARY FOR ROLE?`,
            name: 'rSalary'
        },
        {
            type: 'input',
            message: `WHAT DEPARTMENT IS ROLE ASSOCIATED WITH?`,
            name: 'rDep'
        }
    ],
    employeeQs:[
        {
            type: 'input',
            message: `WHAT IS EMPLOYEE NAME?`,
            name: 'eName'
        },
        {
            type: 'input',
            message: `WHAT IS EMPLOYEE's ROLE WITHIN COMPANY?`,
            name: 'eRole'
        },
        {
            type: 'input',
            message: `WHAT IS EMPLOYEE'S MGR ID?`,
            name: 'eMgr'
        },
    ],
    updateQs:[
        {
            type: 'input',
            message: 'WHICH EMPLOYEE NUMBER ARE WE UPDATING TODAY?',
            name: 'findEmployee'
        },
        {
            type: 'input',
            message: `WHAT IS EMPLOYEE's NEW ROLE WITHING COMPANY?`,
            name: 'nuRole'
        },
    ]
};

module.exports = qs;