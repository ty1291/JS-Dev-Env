// Configure web server that will server up files in source directory

var express = require('express');
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;
const app = express(); // instance of express
const compiler = webpack(config);

// express to use webpack-dev-middleware and overwrite defined webpack.config property values
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

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
