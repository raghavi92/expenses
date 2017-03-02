const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExpenseSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  amount: Number,
  date: Date
});
const ExpenseModel = mongoose.model("Expense", ExpenseSchema);
module.exports = ExpenseModel;
