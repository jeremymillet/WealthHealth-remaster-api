
-- Création de la table `departments`
CREATE TABLE departments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  value TEXT NOT NULL,
  label TEXT NOT NULL
);

-- Insertion des données dans la table `departments`
INSERT INTO departments (value, label) VALUES
('Sales', 'Sales'),
('Marketing', 'Marketing'),
('Engineering', 'Engineering'),
('Human Resources', 'Human Resources'),
('Legal', 'Legal');

-- Création de la table `states`
CREATE TABLE states (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  value TEXT NOT NULL,
  label TEXT NOT NULL
);

-- Insertion des données dans la table `states`
INSERT INTO states (value, label) VALUES
('Alabama', 'Alabama'),
('Alaska', 'Alaska'),
('American Samoa', 'American Samoa'),
('Arizona', 'Arizona'),
('Arkansas', 'Arkansas'),
('California', 'California'),
('Colorado', 'Colorado'),
('Connecticut', 'Connecticut'),
('Delaware', 'Delaware'),
('District Of Columbia', 'District Of Columbia'),
('Federated States Of Micronesia', 'Federated States Of Micronesia'),
('Florida', 'Florida'),
('Georgia', 'Georgia'),
('Guam', 'Guam'),
('Hawaii', 'Hawaii'),
('Idaho', 'Idaho'),
('Illinois', 'Illinois'),
('Indiana', 'Indiana'),
('Iowa', 'Iowa'),
('Kansas', 'Kansas'),
('Kentucky', 'Kentucky'),
('Louisiana', 'Louisiana'),
('Maine', 'Maine'),
('Marshall Islands', 'Marshall Islands'),
('Maryland', 'Maryland'),
('Massachusetts', 'Massachusetts'),
('Michigan', 'Michigan'),
('Minnesota', 'Minnesota'),
('Mississippi', 'Mississippi'),
('Missouri', 'Missouri'),
('Montana', 'Montana'),
('Nebraska', 'Nebraska'),
('Nevada', 'Nevada'),
('New Hampshire', 'New Hampshire'),
('New Jersey', 'New Jersey'),
('New Mexico', 'New Mexico'),
('New York', 'New York'),
('North Carolina', 'North Carolina'),
('North Dakota', 'North Dakota'),
('Northern Mariana Islands', 'Northern Mariana Islands'),
('Ohio', 'Ohio'),
('Oklahoma', 'Oklahoma'),
('Oregon', 'Oregon'),
('Palau', 'Palau'),
('Pennsylvania', 'Pennsylvania'),
('Puerto Rico', 'Puerto Rico'),
('Rhode Island', 'Rhode Island'),
('South Carolina', 'South Carolina'),
('South Dakota', 'South Dakota'),
('Tennessee', 'Tennessee'),
('Texas', 'Texas'),
('Utah', 'Utah'),
('Vermont', 'Vermont'),
('Virgin Islands', 'Virgin Islands'),
('Virginia', 'Virginia'),
('Washington', 'Washington'),
('West Virginia', 'West Virginia'),
('Wisconsin', 'Wisconsin'),
('Wyoming', 'Wyoming');

-- Création de la table `employees`
CREATE TABLE employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth TEXT NOT NULL,
  start_date TEXT NOT NULL,
  street TEXT NOT NULL,
  city TEXT NOT NULL,
  state_id INTEGER NOT NULL,
  zip_code INTEGER NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (state_id) REFERENCES states(id),
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Insertion des données dans la table `employees`
INSERT INTO employees (first_name, last_name, date_of_birth, start_date, street, city, state_id, zip_code, department_id)
VALUES 
('John', 'Doe', '1990-05-20', '2022-01-15', '123 Elm St', 'New York', 1, 10001, 1),
('Jane', 'Smith', '1985-11-15', '2021-06-10', '456 Oak St', 'San Francisco', 2, 94102, 2),
('Alice', 'Johnson', '1987-12-30', '2020-03-01', '789 Maple St', 'Chicago', 3, 60601, 3),
('Bob', 'Brown', '1991-07-07', '2019-07-20', '321 Pine St', 'Seattle', 4, 98101, 4),
('Charlie', 'Davis', '1993-01-23', '2021-11-03', '654 Birch St', 'Austin', 5, 73301, 5),
('David', 'Evans', '1989-04-14', '2018-09-12', '987 Cedar St', 'Boston', 6, 2101, 6),
('Eva', 'Garcia', '1995-03-19', '2022-05-08', '111 Walnut St', 'Miami', 7, 33101, 7),
('Frank', 'Harris', '1986-08-05', '2020-08-24', '222 Oakwood St', 'Los Angeles', 2, 90001, 8),
('Grace', 'Kim', '1990-11-22', '2019-04-16', '333 Sycamore St', 'Denver', 8, 80201, 1),
('Henry', 'Lee', '1994-10-12', '2021-12-19', '444 Chestnut St', 'Phoenix', 9, 85001, 3),
('Irene', 'Martinez', '1991-06-01', '2020-10-02', '555 Poplar St', 'Dallas', 5, 75201, 2),
('Jack', 'Nelson', '1988-09-17', '2018-02-14', '666 Elm St', 'Houston', 5, 77001, 4),
('Karen', 'OConnor', '1987-02-03', '2022-03-25', '777 Beech St', 'Las Vegas', 10, 89101, 5),
('Larry', 'Parker', '1992-05-16', '2019-06-30', '888 Fir St', 'San Diego', 2, 92101, 6),
('Mia', 'Quinn', '1996-07-25', '2020-01-08', '999 Willow St', 'Portland', 11, 97201, 7),
('Nathan', 'Reed', '1993-03-09', '2021-04-10', '100 Pine St', 'Chicago', 3, 60602, 8),
('Olivia', 'Sanchez', '1997-01-21', '2022-06-01', '200 Spruce St', 'New York', 1, 10002, 1),
('Paul', 'Taylor', '1984-08-10', '2020-09-17', '300 Maple St', 'Boston', 6, 2102, 3),
('Quincy', 'Upton', '1990-04-07', '2019-05-14', '400 Cedar St', 'Seattle', 4, 98102, 2),
('Rachel', 'Vargas', '1989-12-01', '2021-02-22', '500 Pine St', 'Miami', 7, 33102, 4),
('Sam', 'Williams', '1995-11-28', '2020-07-13', '600 Oak St', 'Austin', 5, 73302, 5),
('Tina', 'Xu', '1986-02-13', '2018-03-09', '700 Birch St', 'San Francisco', 2, 94103, 6),
('Uma', 'Young', '1992-06-23', '2022-05-17', '800 Oakwood St', 'Denver', 8, 80202, 7),
('Victor', 'Zimmerman', '1983-09-15', '2021-11-05', '900 Sycamore St', 'Phoenix', 9, 85002, 8),
('Wendy', 'Adams', '1990-12-18', '2020-08-20', '1000 Chestnut St', 'Los Angeles', 2, 90002, 1),
('Xander', 'Bennett', '1987-05-09', '2019-10-31', '1100 Walnut St', 'Las Vegas', 10, 89102, 3),
('Yara', 'Carter', '1995-09-11', '2021-01-07', '1200 Elm St', 'San Diego', 2, 92102, 2),
('Zack', 'Davies', '1991-10-29', '2022-07-03', '1300 Oakwood St', 'Portland', 11, 97202, 4),
('Aaron', 'Ellis', '1989-07-15', '2020-11-21', '1400 Birch St', 'Chicago', 3, 60603, 5),
('Bella', 'Fox', '1988-03-05', '2018-06-28', '1500 Maple St', 'Boston', 6, 2103, 6);
-- Création de la table `users`
CREATE TABLE users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  refresh_token TEXT DEFAULT NULL
);

-- Insertion des données dans la table `users`
INSERT INTO users (email, password, refresh_token) VALUES
('jeremy37.millet@gmail.com', '$2b$12$0VyrrSckI3ZNhtyyNqnmV.UAEePTpMCFtS413xxHT0ojXmS9bsxQ6', NULL);

