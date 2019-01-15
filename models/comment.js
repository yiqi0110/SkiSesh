var mongoose = require('mongoose');

var CommentSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    comment: { type: String, required: true}
});

module.exports = mongoose.model('Comment', CommentSchema);