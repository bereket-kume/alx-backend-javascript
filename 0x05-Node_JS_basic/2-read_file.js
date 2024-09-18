const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = {};
    let totalStudents = 0;
    lines.forEach((line) => {
      const student = line.split(',');
      if (student.length === 4) {
        const field = student[3];
        const firstName = student[0];
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents += 1;
      }
    });
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
