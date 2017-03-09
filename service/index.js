"use strict"
var ExpenseRoute = require('./routes/expenseRoute');
var CategoryRoute = require('./routes/categoryRoute');
var express = require('express')
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const CategoryModel = require('./models/categoryModel.js');

app.use(cors());

app.use(bodyParser.json());

app.use('/expense', ExpenseRoute);

app.use('/category', CategoryRoute);

console.log('connecting to db...');
mongoose.connect('mongodb://localhost:27017/expense');
mongoose.connection.on('open', () => {
  console.log('Connection to db success..');
  app.listen(3000, () => {
    console.log('Listening on port 3000!')
  });
});

mongoose.connection.on('error', (err) => {
  console.log('error connecting to database..' + err);
});
