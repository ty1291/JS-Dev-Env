// Configure web server that will server up files in source directory
// NOT for actual production use. Useful for hosting minified production build for local
// debugging purposes.

var express = require('express');
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express(); // instance of express

app.use(compression()); // see how large solution is; transferred across to user
app.use(express.static('dist')); // server static files in the dist folder


app.get('/', function(req, res) { // any references to root
  // __dirname: directory name we're currently running in
  res.sendFile(path.join(__dirname, '../dist/index.html')); // send index.html
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName":"Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    {"id": 2, "firstName":"Tam", "lastName": "Tim", "email": "tam@gmail.com" },
    {"id": 3, "firstName":"Jim", "lastName": "Jam", "email": "jim@gmail.com" }
  ]);
});

app.listen(port, function(err) { // listen to port
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port); // open up website
  }
});
