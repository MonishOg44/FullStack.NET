-- 1. Create a database
CREATE DATABASE companyDB;
USE companyDB;
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary INT DEFAULT 30000,
    email VARCHAR(150) UNIQUE  
);

INSERT INTO employees (id, name, salary, email)
VALUES
(1, 'Aarav', 35000, 'aarav@gmail.com'),
(2, 'Monish', 40000, 'monish@gmail.com'),
(3, 'Priya', 32000, 'priya@gmail.com'),
(4, 'Rahul', 30000, 'rahul@gmail.com'),
(5, 'Sneha', 45000, 'sneha@gmail.com');

SELECT * FROM employees;

INSERT INTO employees (id, name, salary, email)
VALUES (6, 'Duplicate', 31000, 'aarav@gmail.com');

-- 6. Drop the table
DROP TABLE employees;

-- Recreate with CHECK constraint for salary > 0
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary INT CHECK (salary > 0),
    email VARCHAR(150) UNIQUE
);

INSERT INTO employees (id, name, salary, email)
VALUES
(1, 'Aarav', 35000, 'aarav@gmail.com'),
(2, 'Monish', 40000, 'monish@gmail.com'),
(3, 'Priya', 32000, 'priya@gmail.com'),
(4, 'Rahul', 30000, 'rahul@gmail.com'),
(5, 'Sneha', 45000, 'sneha@gmail.com');