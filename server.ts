import { secret } from './pw';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'fhussain',
    password: secret
});