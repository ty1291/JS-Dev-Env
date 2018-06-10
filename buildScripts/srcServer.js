// Configure web server that will server up files in source directory

var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express(); // instance of express

app.get('/', function(req, res) { // any references to root
  // __dirname: directory name we're currently running in
  res.sendFile(path.join(__dirname, '../src/index.html')); // send index.html
});

app.listen(port, function(err) { // listen to port
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port); // open up website
  }
});
