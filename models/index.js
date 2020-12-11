const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// defines association between 'User' and 'Post' models, identifying 'post.user_id' as foreign key to 'user.id'
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// defines converse relationship to that above; again specifying 'post.user_id' as foreign key to 'user.id'
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


module.exports = { Comment, Post, User };