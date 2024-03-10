const mongoose = require("mongoose");

const postSchema=mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId , required: true},
    date: {type: Date , default:Date.now},
    likes:[mongoose.Schema.Types.ObjectId],
    comments: [mongoose.Schema.Types.ObjectId],
    image_url: String,
    desc: String
})

const post = mongoose.model('post',postSchema);

module.exports={post};