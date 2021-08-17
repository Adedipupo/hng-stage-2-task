const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    user: {
        type: 'String',
        unique: true,
        required: true
    },
    email: {
        type: 'String',
        required: true,
        unique: true
    },
    comments: [
        {
          comment: String,
        },
      ],
}, { timestamps: true })


const BlogModel = mongoose.model('Blog', blogSchema)

module.exports =  BlogModel 