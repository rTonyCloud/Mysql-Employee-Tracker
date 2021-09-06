DROP TABLE IF EXISTS employee;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;


CREATE TABLE department (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    );
CREATE TABLE employee (
    id int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INTEGER,
    manager_id INTERGER NOT NULL;
    CONTRAINT fk_employee FOREIGN KEY (roles_id) REFERENCE roles(id);
    );L
    );

CREATE TABLE roles (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
    CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCE department(id)
    );
\

