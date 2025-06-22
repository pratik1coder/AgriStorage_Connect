const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'agri_storage'
});

db.connect(err => {
    if (err) {
      console.error('Database connection error:', err);
      process.exit(1);
    }
    console.log('Connected to the database.');
  });
  
  // Handle form submission
  app.post('/submit', (req, res) => {
    const {
      name,
      contact,
      email,
      address,
      district,
      state,
      crop,
      quantity,
      harvest_date,
      shelf_life,
      storage_type,
      special_requirements,
      farm_location,
      coordinates,
      notes
    } = req.body;
  
    const sql = `
      INSERT INTO crop_info (name, contact, email, address, district, state, crop, quantity, harvest_date, shelf_life, storage_type, special_requirements, farm_location, coordinates, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    db.query(sql, [name, contact, email, address, district, state, crop, quantity, harvest_date, shelf_life, storage_type.join(','), special_requirements, farm_location, coordinates, notes], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error submitting form.');
      } else {
        res.send('Form submitted successfully!');
      }
    });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });


