const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({

    user:{type: mongoose.Schema.Types.ObjectId , required: true},
    post:{type: mongoose.Schema.Types.ObjectId , required: true},
    date:{type: Date , default: Date.now},
    desc:{type: String , required: true}
})

const comments = mongoose.model('Comments' , commentsSchema );

module.exports = {comments};
