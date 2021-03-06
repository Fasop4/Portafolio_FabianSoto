/* File Name: Portafolio-Fabian_Soto
Name: Fabian Soto Palacio
ID: 301153142
Date: Octuber 03, 2021 */

import createError, { HttpError } from "http-errors";
import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";
import logger from 'morgan';
import indexRouter from './routes/index';
import  mongoose from "mongoose";

//instantiate Mongo
mongoose.connect('mongodb://localhost:27017/mobile_store');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log("Connected to MongoDB at localhost:27017")
});

//instantiate express
const app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'),
path.join(__dirname, 'views/partials/')]);
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client_front')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
