const http = require('http');
const url = require('url');
const countStudents = require('./read_file');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
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
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
