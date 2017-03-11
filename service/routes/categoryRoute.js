const express = require('express');
const CategoryRoute = express.Router();
const CategoryModel = require('../models/categoryModel.js');

CategoryRoute.route('/')
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
      res.status(201).json(category);
    } else {
      res.status(500).send(err);
    }
  });
});

module.exports = CategoryRoute;
