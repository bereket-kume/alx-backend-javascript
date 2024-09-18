const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).map((line) => line.split(',')).filter((student) => student.length > 0);
      const totalStudents = students.length;

      const csStudents = students.filter((student) => student[3] === 'CS');
      const sweStudents = students.filter((student) => student[3] === 'SWE');

      let output = `Number of students: ${totalStudents}\n`;
      output += `Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student[0]).join(', ')}\n`;
      output += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student[0]).join(', ')}`;

      resolve(output);
    });
  });
}

module.exports = countStudents;
