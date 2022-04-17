var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    pages: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
