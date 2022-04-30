const mongoose = require('mongoose');


const discussionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment' 
    }],
})

module.exports =  mongoose.model('Discussion', discussionSchema);