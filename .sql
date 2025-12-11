-- create DB_NAME;
-- USE DB_NAME;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  quantity INT DEFAULT 0,
  price DECIMAL(10,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'staff', 'viewer') DEFAULT 'viewer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, role) VALUES
('admin', '$2a$10$7VQdUFlwcEARt5DIWYoRgOI0dq.Bhvs7CBu1XsdIs1unV4u.H4Y16', 'admin'),
('staff', '$2a$10$mFQ0ckXXyVicTuCcN7qwn.kAhwRbtHCO0dx2ZTskA14/gsZUB8odu', 'staff'),
('viewer', '$2a$10$7JOtsyvcEDV9GmvN1wh1H..uhXWO5fB7JJqGOZJ70WPlPoZTCYfy.', 'viewer');