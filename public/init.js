#!/usr/bin/env nodejs

var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

app.get('/', function (req, res) {
	fs.readFile('static/layout.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.listen(8080);
console.log('Server running at http://localhost:8080/');