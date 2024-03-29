const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
}, {timeStamp: true});

const Blog = mongoose.model('Blogs', blogSchema);
module.exports = Blog;