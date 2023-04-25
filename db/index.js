const connection = require('./connect');

class Db {
    constructor(connection) {
        this.connection = connection;
    };

    viewAllDepartments() {
        return this.connection.promise().query(
            'SELECT departments.id, departments.d_name FROM departments'
        )
    }

    viewAllRoles() {
        return this.connection.promise().query(
            'SELECT roles.id, roles.r_name, departments.d_name AS pineapple, roles.salary FROM roles LEFT JOIN departments ON roles.department_id = departments.id;'
        )
    }

    viewAllEmployees() {
        return this.connection.promise().query(
            'SELECT employees.id, employees.e_name, roles.r_name AS grapefruit, departments.d_name AS cherry, roles.salary AS lime, employees.mgr_id AS mgr FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employees mgr ON employees.mgr_id = employees.id;'
        )
    }

    addDepartment(dept) {
        return this.connection.promise().query(
            'INSERT INTO departments SET d_name = ?', dept
        ).then(console.log('THE NEW DEPARTMENT IS HERE!!'));
    }

    addRole(name, salary, dept) {
        return this.connection.promise().query(
            "INSERT INTO roles (r_name, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE d_name = ?))", [name, salary, dept]
        ).then(console.log(`WE ARE OUT HERE CREATING JOBS!! ${name} has succesfully been added to roles!`));
    }

    addEmployee(name, role, mgr) {
        return this.connection.promise().query(
            'INSERT INTO employees (e_name, role_id, mgr_id) VALUES (?, (SELECT id FROM roles WHERE r_name = ?), ?)', [name, role, mgr]
        ).then(console.log(`WELCOME TO THE TEAM ${name}! Employee added succefully!`));
        // (SELECT id FROM roles WHERE r_name = ?), (SELECT id FROM employees WHERE e_name = ?)
    }

    updateEmployee(id, role) {
        return this.connection.promise().query(
            "UPDATE employees SET role_id = ? WHERE id = ?", [role, id]
        ).then(console.log(`THAT EMPLOYEE ASS SHIT BEEN UPDATED FAM!`));
    }
};

module.exports = new Db(connection);