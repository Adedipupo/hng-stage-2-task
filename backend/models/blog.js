const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    comments: {
    type: String,
    required: true
},
}, { timestamps: true })


const BlogModel = mongoose.model('Blog', blogSchema)

module.exports =  BlogModel 