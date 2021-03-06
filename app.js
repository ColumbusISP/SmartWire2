var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var finalhandler = require('finalhandler');
var bodyParser = require('body-parser');
var sequelize = require('sequelize');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
var cors = require('cors');

//Initialize passport strategy
var hookJWTStrategy = require('./services/passportStrategy');

var app = express();

var authRouter = require('./routes/auth');


// setup the logger
app.use(morgan('combined'));

//CORS Middleware

//var cors = require('cors');    
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));


// 4: Parse as urlencoded and json.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 6: Hook up Passport.
app.use(passport.initialize());
hookJWTStrategy(passport);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.use(express.static(path.join(__dirname, 'dist/SmartWire')));
app.use('/', express.static(path.join(__dirname, 'dist/SmartWire')));


app.use('/api', authRouter (passport));

module.exports = app;
