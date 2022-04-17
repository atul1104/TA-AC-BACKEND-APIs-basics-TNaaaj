var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    comment: String,
    bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
    author: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
