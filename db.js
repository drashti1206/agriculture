const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
    host: 'localhost',           // Your MySQL host (e.g., localhost)
    user: 'root',                // Your MySQL username
    password: 'Sonu1206#',   // Your MySQL password
    database: 'mysql' // Your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;
