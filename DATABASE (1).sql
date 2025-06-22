CREATE DATABASE agri_storage;

USE agri_storage;

CREATE TABLE crop_info (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  contact VARCHAR(255),
  email VARCHAR(255),
  address TEXT,
  district VARCHAR(255),
  state VARCHAR(255),
  crop VARCHAR(255),
  quantity INT,
  harvest_date DATE,
  shelf_life INT,
  storage_type TEXT,
  special_requirements TEXT,
  farm_location TEXT,
  coordinates VARCHAR(255),
  notes TEXT
);
