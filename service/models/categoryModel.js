const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Enter a valid category name"]
  }
});
const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;
