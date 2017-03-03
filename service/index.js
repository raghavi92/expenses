"use strict"
var express = require('express')
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ExpenseModel = require('./models/expenseModel.js');
const CategoryModel = require('./models/categoryModel.js');
app.use(cors());
app.use(bodyParser.json());

app.route('/expense')
  .get((req, res) => {
    ExpenseModel.find().lean().exec((error, results) => {
      if(!error) {
        res.json(results);
      } else {
        res.status(500).send(results);
      }
    });
  })
  .post((req, res) => {
    let expense = new ExpenseModel(req.body);
    expense.save((err) => {
      if(!err) {
        res.sendStatus(201);
      } else {
        res.status(500).send(err);
      }
    });
  });

app.route('/category')
  .get((req, res) => {
    CategoryModel.find().lean().exec((error, results) => {
      if(!error) {
        res.json(results);
      } else {
        res.status(500).send(results);
      }
    });
  })
  .post((req, res) => {
    let category = new CategoryModel(req.body);
    category.save((err) => {
      if(!err) {
        res.sendStatus(201);
      } else {
        res.status(500).send(err);
      }
    });
  })

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
