INSERT INTO departments (d_name)
    VALUES  ("Wetworks"),
            ("Espionage"),
            ("Customer Service"),
            ('HR');
            

INSERT INTO roles (r_name, salary, department_id)
    VALUES ("Logistics Coordination", 125000, 1),
            ("Hit Supervisor", 300000, 1),
            ("Jr. Henchperson", 50000, 1),
            ("Local HR Representative", 80000, 4);

INSERT INTO employees (e_name, role_id)
    VALUES ("Unclean Harold", 3),
            ("Carl The Killer", 1),
            ("Cranky Frankie", 4);
