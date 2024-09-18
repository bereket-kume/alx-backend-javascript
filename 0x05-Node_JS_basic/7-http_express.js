const express = require('express');
const countStudents = require('./read_file');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School! ');
});

app.get('/students', (req, res) => {
  const dbfile = process.argv.length > 2 ? process.argv[2] : '';
  let responseText = 'This is the list of our students\n';

  countStudents(dbfile)
    .then((data) => {
      responseText += data;
      res.end(responseText);
    })
    .catch((error) => {
      responseText += error.message;
      res.end(responseText);
    });
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
