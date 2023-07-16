var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())

var db = require('./src/configs/db')
var routeAltair = require("./src/routes/altair.routes")
app.use('/user', routeAltair);


app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});