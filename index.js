var express = require('express');

var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);

require('./routes/system-task.js')(app);

var server = app.listen(8080, function () {
  console.log('Mock Server running at http://localhost:8080/');
});