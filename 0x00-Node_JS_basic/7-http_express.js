// create a small HTTP server using Express module:

// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School! in the page body for the endpoint /

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  try {
    const students = await countStudents(process.argv[2]);
    res.end(`This is the list of our students\n${students.join('\n')}`);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => console.log(`${process.argv[1]} listening on port ${port}!`));

module.exports = app;
