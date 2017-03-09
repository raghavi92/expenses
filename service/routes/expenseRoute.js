const express = require('express');
const ExpenseRoute = express.Router();
const ExpenseModel = require('../models/expenseModel.js');

ExpenseRoute.route('/')
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
  let expenseBody = req.body;
  if(expenseBody.category_id) {
    console.log("checking...");
  }
  let expense = new ExpenseModel(req.body);
  expense.save((err) => {
    if(!err) {
      res.sendStatus(201);
    } else {
      res.status(500).send(err);
    }
  });
});

module.exports = ExpenseRoute;
