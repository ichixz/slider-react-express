var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var starWars = require('./routes/starwars');
var sweets = require('./routes/sweets');
var tech = require('./routes/tech');
var cats = require('./routes/cats');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/starwars', starWars);
app.use('/sweets', sweets);
app.use('/tech', tech);
app.use('/cats', cats);


module.exports = app;
