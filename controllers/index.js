// this file, 'index', packages contents of the 'controllers' file for importation to server.js

const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
// collects packaged group of api routes and applies prefix
router.use('/api', apiRoutes);

// the error provided if a non-existant endpoint is searched
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;