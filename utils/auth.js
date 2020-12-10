const withAuth = (req, res, next) => {
    console.log('req.session: ', req.session);
    if (!req.session.user_id) {
        console.log('TEST redirecting to login');
        console.log('TEST req.session: ', req.session);
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;