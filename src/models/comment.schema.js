const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
}, 
  {timestamps: true}
);

module.exports = mongoose.model("Comment", commentSchema);