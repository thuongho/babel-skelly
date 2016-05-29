'use strict';
// move babel to dependencies because node will be using it in runtime
// add express


require('babel-register');
// require rest of app
require('./lib/app');
// use server file as a proxy to load in all the other files