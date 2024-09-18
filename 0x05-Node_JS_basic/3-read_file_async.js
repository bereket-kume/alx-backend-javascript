const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        if (!data) throw new Error('Cannot load the database');

        const lines = data.split('\n').filter((line) => line.trim().length > 0);
        const studentGroups = {};
        let totalStudents = 0;

        // Skip the first line (headers)
        lines.slice(1).forEach((line) => {
          const [firstName, , , field] = line.split(',');
          if (field) {
            if (!studentGroups[field]) studentGroups[field] = [];
            studentGroups[field].push(firstName);
            totalStudents++;
          }
        });

        console.log(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentGroups)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      })
      .catch((err) => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
