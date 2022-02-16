USE employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)

VALUES
    ('Sales Lead', 110000, 1),
    ('Salesperson', 85000, 1),
    ('Lead Engineer', 165000, 2),
    ('Software Engineer', 125000, 2),
    ('Account Manager', 175000, 3),
    ('Accountant', 135000, 3),
    ('Legal Team Lead', 275000, 4),
    ('Lawyer', 210000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Triston', 'Golden', 1, NULL),
    ('James', 'Cooksey', 2, 1),
    ('Quesi', 'Cato', 3, NULL),
    ('Sim', 'Springer', 4, 3),
    ('Chawn', 'Golden', 5, NULL),
    ('Mark', 'Coulibaly', 6, 5),
    ('Anthony', 'Edwards', 7, NULL),
    ('Montel', 'Quinones', 8, 7);