
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
INSERT INTO employees (first_name, last_name, date_of_birth, start_date, street, city, state_id, zip_code, department_id) VALUES
('Jeremy', 'Millet', '2002-07-15', '2024-10-16', '81 avenue de la république', 'Tours', 2, 37100, 3);

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
