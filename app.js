var express = require('express');

var app = express();
var port = process.env.PORT || 300;

app.use('/assets', express.static(__dirname+'/public'));