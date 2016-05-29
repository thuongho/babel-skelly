'use strict';

// simple express app that serves up html file on localhost3000

var express = require('express');
// create a new express app
var app = express();

// create http server out of that app
var server = require('http').createServer(app);
// anyone visiting root will be served up static files
app.use('/', express.static(__dirname + '/../dist', { maxAge: 1000000 }));
// tell server to listen on port 3000
// test if babel is working, console log app started to see if it interprets ES6 correctly
server.listen(3000, () => console.log('app started'));