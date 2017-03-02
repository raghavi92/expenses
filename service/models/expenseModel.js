const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExpenseSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, "Enter a valid title for your expense"]
  },
  amount: {
    type: Number,
    required: [true, "Enter a valid amount"]
  },
  date: {
    type: Date,
    required: [true, "Enter a valid date"]
  },
  notes: String,
  category_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }]
});
const ExpenseModel = mongoose.model("Expense", ExpenseSchema);
module.exports = ExpenseModel;
