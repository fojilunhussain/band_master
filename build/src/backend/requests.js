"use strict";
// var logger = require('morgan');
// var express = require('express');
// var cookieParser = require('cookie-parser');
// var indexRouter = require('./routes/index');
// import logger from 'morgan';
// import express from 'express';
// import cookieParser from 'cookie-parser';
// import indexRouter from './routes/index';
// var app = express();
Object.defineProperty(exports, "__esModule", { value: true });
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use('/v1', indexRouter);
// // module.exports = app;
// export default app;
const express = require("express");
const app = express();
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
//# sourceMappingURL=requests.js.map