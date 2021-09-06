INSERT INTO department (id, name)

VALUES ("Sales"), ("Engineering"), ("Finance"), ("Marketing");


INSERT INTO Roles (title, salary, department)

VALUES ("Sales Engineer", 120000, 1), ("Sales Consultant", 850000, 1), 
("Cloud Engineer", 130000, 2), ("Software Engineer", 130000, 2), 
("Lead Accountant", 200000, 3), ("Marketing Lead", 50000, 4));

INSERT INTO employee (first_name, last_name, role_id, manager_id) 

VALUES (‘Steve’, ’Stoner’, 1, 1),
(‘Chris’, ‘Chereeko’, 4, 1), 
(‘Rocko’, ‘Socko’, 3, 1), 
(‘Hunter’, ‘Pedigree’, 6, 2), 
(‘jewel’, ‘Ball’, 2, 5), 
(‘Kobe’, ’Ballin’, 1, 1), 
(‘Joe’, ‘Forge’, 4, 1), 
(‘Jessica’, ‘Black’, 4, 1), 
(‘Andrew’,’Mills’, 5, 2), 
(‘Luke’,’Waker’, 5, 2);