// this file, 'index.js', collects all route-files within 'api' and packages them for importation by 'controllers/index'

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// const postRoutes = require('./post-routes.js');
// const commentRoutes = require('./comment-routes.js');

// establishes route prefixes
router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;