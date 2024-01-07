const {mongoose, mongoclient} = require('../db/mongodb');

mongoclient();
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: {
        type: Date,
        default: Date.now
    },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})

const Blog = mongoose.model('Blog', blogSchema);
