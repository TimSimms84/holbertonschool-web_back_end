// // create a class named StudentsController. Add two static methods:
// The first one is getAllStudents:
// The method accepts request and response as argument
// It should return a status 200
// It calls the function readDatabase from the utils file, and display in the page:
// First line: This is the list of our students
// And for each field (order by alphabetic order case insensitive),
// a line that displays the number of students in the field, and the list of first names
// (ordered by appearance in the database file) with the following format: Number of students in
// FIELD: 6. List: LIST_OF_FIRSTNAMES
// If the database is not available, it should return a
// status 500 and the error message Cannot load the database
// The second one is getAllStudentsByMajor:
// The method accepts request and response as argument
// It should return a status 200
// It uses a parameter that the user can pass to the browser major. The major can only be CS or SWE.
// If the user is passing another parameter, the server should return a 500 and the error Major
// parameter must be CS or SWE It calls the function readDatabase from the utils file, and
// display in the page the list of first names for the students (ordered by
// appearance in the database file) in the specified field List: LIST_OF_FIRSTNAMES_IN_THE_FIELD
// If the database is not available, it should return a status 500 and the
// error message Cannot load the database

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        res.status(200).send(`This is the list of our students
Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}
Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        if (req.params.major === 'CS') {
          res.status(200).send(`List: ${data.CS.join(', ')}`);
        } else if (req.params.major === 'SWE') {
          res.status(200).send(`List: ${data.SWE.join(', ')}`);
        } else {
          res.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
