// function countStudents
// read the database asyncously
// The function should return a Promise
// If the database is not available, it should throw an error with the text Cannot load the database
// If the database is available, it should log the following message to the console Number of
// students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the list with the following
// format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines (at the end) - and they are not a valid student!

const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.split('\n').slice(1, -1);
    const cs = [];
    const swe = [];
    console.log(`Number of students: ${students.length}`);
    for (const student of students) {
      const fields = student.split(',');
      if (fields[3] === 'CS') {
        cs.push(fields[0]);
      } else {
        swe.push(fields[0]);
      }
    }
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    throw Error('Cannot load the database');
  }
};
