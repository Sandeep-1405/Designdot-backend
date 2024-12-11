const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Register', 
        required: true 
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

const Blogs = mongoose.model('Blogs', blogSchema); 

module.exports = Blogs;
