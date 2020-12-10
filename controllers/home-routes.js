const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    // request for template engine to render response
    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM comments WHERE post.id = comment.post_id)'), 'comment_count']
        ],
        include: [
            {
                model: User,
                attributes: [
                
                ]
            },
            {
                model: Comment,
                attributes: [

                ]
            }
        ]
    })
    .then(dbPostData => {
        // loops through each Sequelize object and passes to template engine to create a new array of tailored response objects
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;