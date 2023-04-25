SELECT departments.id, roles.department_id FROM roles
LEFT JOIN departments ON roles.department_id = departments.id;

SELECT roles.id, employees.role_id FROM employees
LEFT JOIN roles ON employees.role_id = roles.id;

SELECT employees.mgr_id, employees.id FROM employees
LEFT JOIN employees ON employees.mgr_id = employees.id;