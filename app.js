var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pag001Router = require('./routes/pag001');
var pag002Router = require('./routes/pag002');
var pag003Router = require('./routes/pag003');
var pag004Router = require('./routes/pag004');
var pag005Router = require('./routes/pag005');
var pag006Router = require('./routes/pag006');
var pag007Router = require('./routes/pag007');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pag001.html', pag001Router);
app.use('/pag002.html', pag002Router);
app.use('/pag003.html', pag003Router);
app.use('/pag004.html', pag004Router);
app.use('/pag005.html', pag005Router);
app.use('/pag006.html', pag006Router);
app.use('/pag007.html', pag007Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;