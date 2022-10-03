// require('express-async-errors');
const express = require('express');
const userRouter = require('./src/routes/user.routes');
const error = require('./src/middlewares/error');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use(error);

module.exports = app;