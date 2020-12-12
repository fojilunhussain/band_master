"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var logger = require('morgan');
// var express = require('express');
// var cookieParser = require('cookie-parser');
// var indexRouter = require('./routes/index');
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use('/v1', index_1.default);
// module.exports = app;
exports.default = app;
//# sourceMappingURL=app.js.map