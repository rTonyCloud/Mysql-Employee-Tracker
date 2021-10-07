DROP TABLE IF EXISTS employee;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;


CREATE TABLE department (
    id int AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
    );
CREATE TABLE employee (
    id int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INTEGER,
    manager_id INTERGER NOT NULL;
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
    );L
    );

CREATE TABLE roles (
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
    );
\

