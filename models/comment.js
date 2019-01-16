var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true},
    seshes: [
        {
        type: Schema.Types.ObjectId,
        ref:"Sesh"
        }
    ],
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;