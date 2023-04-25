// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'QWERTYhaxxoh69?',
    database: 'project_db'
  },
  console.log(`Connected to the project_db database.`)
);

module.exports = connection;