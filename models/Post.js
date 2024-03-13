const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    category: {
        type: String,
        enum: ['Lifestyle', 'Technology', 'Finance', 'Food', 'Parenting', 'Entertainment', 'Career', 'Science', 'Sports', 'DIY', 'Social Issues', 'Relationships', 'Self-Care', 'Product Reviews', 'Humor'],
        default: 'Uncategorized',
    },
}, {
    timestamps: true,
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;
