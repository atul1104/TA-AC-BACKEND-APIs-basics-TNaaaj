var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var Mongostore = require('connect-mongo');

var countryRouter = require('./routes/index');
var stateRouter = require('./routes/states');

//connect to database
mongoose.connect('mongodb://localhost/country-state', (err) => {
  console.log(err ? err : 'Connected to database');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add session
app.use(
  session({
    secret: 'randomcode',
    resave: false,
    saveUninitialized: false,
    store: Mongostore.create({ mongoUrl: 'mongodb://localhost/country-state' }),
  })
);

app.use('/country', countryRouter);
app.use('/state', stateRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;