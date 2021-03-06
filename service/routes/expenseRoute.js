const express = require('express');
const ExpenseRoute = express.Router();
const ExpenseModel = require('../models/expenseModel.js');
var mongoose = require('mongoose');
var _ = require('lodash');
var moment = require('moment');
ExpenseRoute.use('/', (req, res, next) => {
  if(req.method === 'POST' && req.body.category_id) {
    req.body.category_id = _.map(req.body.category_id.split(','), (category_id) => {
      return mongoose.Types.ObjectId(category_id);
    });
    req.body.date = moment(req.body.date, "DD/MM/YYYY").toDate();
  }
  next();
})
ExpenseRoute.route('/')
.get((req, res) => {
  ExpenseModel.aggregate([{
    $unwind: "$category_id"
  }, {
    $match: {
      date: {
        $gte: moment(req.query.fromDate, "DD/MM/YYYY").toDate(),
        $lte: moment(req.query.toDate, "DD/MM/YYYY").toDate()
      }
    }
  }, {
    $group: {
      _id: "$category_id",
      amount: {
        $sum: "$amount"
      }
    }
  }, {
    $lookup: {
      from: "categories",
      localField: "_id",
      foreignField: "_id",
      as: "category"
    }
  }, {
    $unwind: "$category"
  }, {
    $project: {
      amount:1,
      _id: 0,
      categoryName: "$category.name"
    }
  }], function(err, result) {
    if(!err) {
      res.json(result);
    } else {
      res.status(500).send(err);
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
