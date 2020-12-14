import createError from 'http-errors';
import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

import { User } from './../db/models/Users.model';
import { DB } from 'backend/db/controller';

var app = express();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/users', async (req, res) => {
    try {
        const { userId } = req.body;
        // const user = await User.create({ userId })
        const user = new DB.Models.User({
            userId: req.body.userId
        });
        res.status(201).json({
            status: 'success',
            data: {
                userId
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Unable to create user'
        });
    };
});

app.get('/', function(req, res) {
    res.send('Hello');
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});