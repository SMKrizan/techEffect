const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// Source.association(Target); associations use CASCADE on update and SET NULL on delete, except for n:m (belongsToMany), which also uses CASCADE on delete.)

// defines association between 'User' and 'Post' models, identifying 'post.user_id' as foreign key to 'user.id'
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// defines converse relationship to that above; again specifying 'post.user_id' as foreign key to 'user.id'
Post.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


module.exports = { Comment, Post, User };