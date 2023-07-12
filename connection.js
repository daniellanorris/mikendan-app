import { createConnection } from 'mysql';

const connection = createConnection({
  host: 'localhost',  // MySQL server hostname
  database: 'mikendan'  // MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Perform MySQL operations here

connection.end();